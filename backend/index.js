import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

const upload = multer({ storage });


const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Karachi@12345",
    database: process.env.DB_NAME || "test",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
});

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// upload image
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) return res.status(400).json('No file uploaded.');
    const imageUrl = `http://localhost:8800/uploads/${req.file.filename}`;
    return res.json({ imageUrl });
});



// get all books


app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.json(data)
    })
})


// add 

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`,`price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been created Successfully.")
    })
})


// delete 

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully.");
    });
});


//update



app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?,  `price`=?, `cover` = ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully.");
    });
});


// Register User
app.post("/register", (req, res) => {
    const { email, password } = req.body;
    let username = req.body.username;

    if (!email || !password) {
        return res.status(400).json("Email and password are required.");
    }

    if (!username) {
        username = email.split('@')[0];
    }

    // Check if user already exists
    const checkQuery = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(checkQuery, [email, username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length > 0) {
            return res.status(400).json("User with this email or username already exists.");
        }

        // Insert new user into MySQL workbench database
        const insertQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
        const values = [username, email, password];

        db.query(insertQuery, [values], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.json({
                message: "User registered successfully!",
                user: { id: result.insertId, username, email }
            });
        });
    });
});

// Login User
app.post("/login", (req, res) => {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
        return res.status(400).json("Username/Email and password are required.");
    }

    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q, [usernameOrEmail, usernameOrEmail], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) {
            return res.status(404).json("User not found. Please register first.");
        }

        const user = data[0];
        if (user.password !== password) {
            return res.status(400).json("Incorrect password.");
        }

        return res.json({
            message: "Login successful!",
            user: { id: user.id, username: user.username, email: user.email }
        });
    });
});


// ==================== CART ROUTES ====================

// Add book to cart (or increment quantity if already exists)
app.post("/cart", (req, res) => {
    const { userId, bookId, quantity = 1 } = req.body;

    if (!userId || !bookId) {
        return res.status(400).json("userId and bookId are required.");
    }

    const checkQ = "SELECT * FROM cart WHERE user_id = ? AND book_id = ?";
    db.query(checkQ, [userId, bookId], (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length > 0) {
            // Already in cart -> update quantity
            const newQty = data[0].quantity + (parseInt(quantity) || 1);
            const updateQ = "UPDATE cart SET quantity = ? WHERE user_id = ? AND book_id = ?";
            db.query(updateQ, [newQty, userId, bookId], (uErr) => {
                if (uErr) return res.status(500).json(uErr);
                return res.json({ message: "Cart item quantity updated", quantity: newQty });
            });
        } else {
            // Insert new item
            const insertQ = "INSERT INTO cart (`user_id`, `book_id`, `quantity`) VALUES (?)";
            const values = [userId, bookId, parseInt(quantity) || 1];
            db.query(insertQ, [values], (iErr, result) => {
                if (iErr) return res.status(500).json(iErr);
                return res.json({ message: "Book added to cart successfully", id: result.insertId });
            });
        }
    });
});

// Get cart items for a specific user with book details
app.get("/cart/:userId", (req, res) => {
    const userId = req.params.userId;
   
   //innerjoin
    const q = `
        SELECT 
            cart.id AS cart_id,
            cart.user_id,
            users.username,
            users.email,
            books.id,
            books.title,
            books.desc,
            books.price,
            books.cover,
            cart.quantity AS qty,
            cart.added_at
        FROM cart
        JOIN users ON cart.user_id = users.id
        JOIN books ON cart.book_id = books.id
        WHERE cart.user_id = ?
        ORDER BY cart.added_at DESC
    `;

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Get all cart entries across all users
app.get("/cart", (req, res) => {
    const q = `
        SELECT 
            cart.id AS cart_id,
            users.id AS user_id,
            users.username,
            users.email,
            books.id AS book_id,
            books.title,
            books.price,
            books.cover,
            cart.quantity,
            cart.added_at
        FROM cart
        JOIN users ON cart.user_id = users.id
        JOIN books ON cart.book_id = books.id
        ORDER BY cart.added_at DESC
    `;

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Update quantity of a book in cart
app.put("/cart/:userId/:bookId", (req, res) => {
    const { userId, bookId } = req.params;
    const { quantity } = req.body;

    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
        // Delete if quantity is 0 or less
        const delQ = "DELETE FROM cart WHERE user_id = ? AND book_id = ?";
        db.query(delQ, [userId, bookId], (err) => {
            if (err) return res.status(500).json(err);
            return res.json({ message: "Item removed from cart" });
        });
    } else {
        const updateQ = "UPDATE cart SET quantity = ? WHERE user_id = ? AND book_id = ?";
        db.query(updateQ, [qty, userId, bookId], (err) => {
            if (err) return res.status(500).json(err);
            return res.json({ message: "Cart quantity updated successfully" });
        });
    }
});

// Remove a book from user's cart
app.delete("/cart/:userId/:bookId", (req, res) => {
    const { userId, bookId } = req.params;
    const q = "DELETE FROM cart WHERE user_id = ? AND book_id = ?";

    db.query(q, [userId, bookId], (err) => {
        if (err) return res.status(500).json(err);
        return res.json("Item removed from cart successfully.");
    });
});

// Clear entire cart for a user
app.delete("/cart/clear/:userId", (req, res) => {
    const userId = req.params.userId;
    const q = "DELETE FROM cart WHERE user_id = ?";

    db.query(q, [userId], (err) => {
        if (err) return res.status(500).json(err);
        return res.json("Cart cleared successfully.");
    });
});



const PORT = process.env.PORT || 8800;
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
        return;
    }
    console.log(`connected to backend on port ${PORT}!`);
});