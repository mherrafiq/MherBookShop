import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { Trash2, Edit3, Star, ShoppingCart, Check, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { DUMMY_BOOKS_BY_CATEGORY, ALL_DUMMY_BOOKS } from '../data/dummyBooks';

const Books = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [dbBooks, setDbBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [addedIds, setAddedIds] = useState([]); // track which books show "Added!" feedback

  const { addToCart, setCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Fetch backend books on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        const data = Array.isArray(res.data) ? res.data : [];
        setDbBooks(data);
      } catch (err) {
        console.log("Error fetching backend books:", err);
        setDbBooks([]);
      }
    };
    fetchBooks();
  }, []);

  // Update displayed books when categoryParam or dbBooks changes
  useEffect(() => {
    if (categoryParam && DUMMY_BOOKS_BY_CATEGORY[categoryParam]) {
      setDisplayedBooks(DUMMY_BOOKS_BY_CATEGORY[categoryParam]);
    } else if (categoryParam === 'all' || !categoryParam) {
      if (dbBooks.length > 0) {
        setDisplayedBooks(dbBooks);
      } else {
        setDisplayedBooks(ALL_DUMMY_BOOKS);
      }
    } else {
      setDisplayedBooks(ALL_DUMMY_BOOKS);
    }
  }, [categoryParam, dbBooks]);

  const handleDelete = async (book) => {
    if (book.isDummy || String(book.id).startsWith('dummy')) {
      // Delete dummy book locally
      setDisplayedBooks(prev => prev.filter(b => b.id !== book.id));
      return;
    }

    try {
      await axios.delete("http://localhost:8800/books/" + book.id);
      setDisplayedBooks(prev => prev.filter(b => b.id !== book.id));
      setDbBooks(prev => prev.filter(b => b.id !== book.id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedIds(prev => [...prev, book.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== book.id));
    }, 1500);
    setCartOpen(true);
  };

  const placeholders = [
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60"
  ];

  const getBookCover = (cover, id) => {
    if (cover && (cover.startsWith('http://') || cover.startsWith('https://') || cover.startsWith('/') || cover.startsWith('data:'))) {
      return cover;
    }
    const numericId = typeof id === 'number' ? id : (String(id).charCodeAt(String(id).length - 1) || 0);
    return placeholders[numericId % placeholders.length];
  };

  const handleImageError = (e, id) => {
    const numericId = typeof id === 'number' ? id : 0;
    e.target.src = placeholders[numericId % placeholders.length];
  };

  return (
    <div className="books-container" style={{ width: '100%', marginTop: '40px' }}>
      {/* Books Grid */}
      <div className="books-grid">
        {displayedBooks.map(book => {
          const isAdded = addedIds.includes(book.id);
          const isWishlisted = isInWishlist(book.id);
          const rating = book.rating || (4.5 + ((String(book.id).charCodeAt(0) % 5) / 10)).toFixed(1);
          const genreTag = book.tag || (book.isDummy ? 'Featured' : 'Literature');

          return (
            <div className="book-card" key={book.id}>
              <div className="book-cover-wrapper">
                {/* Wishlist Heart Button */}
                <button
                  className={`book-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={() => toggleWishlist(book)}
                  title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                  <Heart
                    size={17}
                    fill={isWishlisted ? "#ef4444" : "none"}
                    color={isWishlisted ? "#ef4444" : "#ffffff"}
                  />
                </button>

                {book.price !== null && book.price !== undefined && (
                  <div className="book-price-badge">
                    {book.price !== 0 && book.price !== "" ? `$${parseFloat(book.price).toFixed(2)}` : "Free"}
                  </div>
                )}
                <img
                  src={getBookCover(book.cover, book.id)}
                  alt={book.title}
                  className="book-cover"
                  onError={(e) => handleImageError(e, book.id)}
                />
                {/* Add to Cart overlay on hover */}
                <div className="book-cover-overlay">
                  <button
                    className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                    onClick={() => handleAddToCart(book)}
                  >
                    {isAdded
                      ? <><Check size={16} /> Added!</>
                      : <><ShoppingCart size={16} /> Add to Cart</>
                    }
                  </button>
                </div>
              </div>

              <div className="book-info">
                <div className="book-meta-top">
                  <span className="book-tag">{genreTag}</span>
                  <div className="book-rating">
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span>{rating}</span>
                  </div>
                </div>
                <h2 className="book-title">{book.title}</h2>
                {book.author && <p className="book-author">by {book.author}</p>}
                <p className="book-desc">{book.desc || "No description provided."}</p>
                <div className="book-meta-bottom">
                  <div className="book-actions">
                    {!book.isDummy && (
                      <Link to={`/update/${book.id}`} className="btn btn-update btn-action" title="Update Book">
                        <Edit3 size={16} />
                      </Link>
                    )}
                    <button className="btn btn-delete btn-action" onClick={() => handleDelete(book)} title="Delete Book">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
