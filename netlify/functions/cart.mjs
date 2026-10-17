import { getDb } from './db.mjs';

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    const db = await getDb();
    const method = event.httpMethod;

    // Extract path segments after /api/cart/
    const pathAfterCart = event.path.replace(/^\/api\/cart\/?/, '');
    const segments = pathAfterCart ? pathAfterCart.split('/') : [];

    // POST /api/cart => Add to cart
    if (method === 'POST') {
      const { userId, bookId, quantity = 1 } = JSON.parse(event.body || '{}');
      if (!userId || !bookId) {
        return { statusCode: 400, headers, body: JSON.stringify('userId and bookId are required.') };
      }

      const [existing] = await db.query(
        'SELECT * FROM cart WHERE user_id = ? AND book_id = ?',
        [userId, bookId]
      );

      if (existing.length > 0) {
        const newQty = existing[0].quantity + (parseInt(quantity) || 1);
        await db.query(
          'UPDATE cart SET quantity = ? WHERE user_id = ? AND book_id = ?',
          [newQty, userId, bookId]
        );
        return { statusCode: 200, headers, body: JSON.stringify({ message: 'Cart item quantity updated', quantity: newQty }) };
      } else {
        const [result] = await db.query(
          'INSERT INTO cart (user_id, book_id, quantity) VALUES (?, ?, ?)',
          [userId, bookId, parseInt(quantity) || 1]
        );
        return { statusCode: 200, headers, body: JSON.stringify({ message: 'Book added to cart successfully', id: result.insertId }) };
      }
    }

    // GET /api/cart => all carts
    if (method === 'GET' && segments.length === 0) {
      const [rows] = await db.query(`
        SELECT cart.id AS cart_id, users.id AS user_id, users.username, users.email,
               books.id AS book_id, books.title, books.price, books.cover,
               cart.quantity, cart.added_at
        FROM cart
        JOIN users ON cart.user_id = users.id
        JOIN books ON cart.book_id = books.id
        ORDER BY cart.added_at DESC
      `);
      return { statusCode: 200, headers, body: JSON.stringify(rows) };
    }

    // DELETE /api/cart/clear/:userId
    if (method === 'DELETE' && segments[0] === 'clear' && segments[1]) {
      const userId = segments[1];
      await db.query('DELETE FROM cart WHERE user_id = ?', [userId]);
      return { statusCode: 200, headers, body: JSON.stringify('Cart cleared successfully.') };
    }

    // GET /api/cart/:userId
    if (method === 'GET' && segments[0]) {
      const userId = segments[0];
      const [rows] = await db.query(`
        SELECT cart.id AS cart_id, cart.user_id, users.username, users.email,
               books.id, books.title, books.desc, books.price, books.cover,
               cart.quantity AS qty, cart.added_at
        FROM cart
        JOIN users ON cart.user_id = users.id
        JOIN books ON cart.book_id = books.id
        WHERE cart.user_id = ?
        ORDER BY cart.added_at DESC
      `, [userId]);
      return { statusCode: 200, headers, body: JSON.stringify(rows) };
    }

    // PUT /api/cart/:userId/:bookId
    if (method === 'PUT' && segments[0] && segments[1]) {
      const userId = segments[0];
      const bookId = segments[1];
      const { quantity } = JSON.parse(event.body || '{}');
      const qty = parseInt(quantity);
      if (isNaN(qty) || qty <= 0) {
        await db.query('DELETE FROM cart WHERE user_id = ? AND book_id = ?', [userId, bookId]);
        return { statusCode: 200, headers, body: JSON.stringify({ message: 'Item removed from cart' }) };
      } else {
        await db.query('UPDATE cart SET quantity = ? WHERE user_id = ? AND book_id = ?', [qty, userId, bookId]);
        return { statusCode: 200, headers, body: JSON.stringify({ message: 'Cart quantity updated successfully' }) };
      }
    }

    // DELETE /api/cart/:userId/:bookId
    if (method === 'DELETE' && segments[0] && segments[1]) {
      const userId = segments[0];
      const bookId = segments[1];
      await db.query('DELETE FROM cart WHERE user_id = ? AND book_id = ?', [userId, bookId]);
      return { statusCode: 200, headers, body: JSON.stringify('Item removed from cart successfully.') };
    }

    return { statusCode: 404, headers, body: JSON.stringify('Route not found') };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
