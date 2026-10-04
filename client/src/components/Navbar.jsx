import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, ChevronDown, X, Plus, Minus, Trash2, ShoppingCart, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { ALL_DUMMY_BOOKS } from '../data/dummyBooks';
import { API_BASE_URL } from '../config';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const inputRef = useRef(null);

  // Cart & Wishlist from context
  const { cartItems, cartOpen, setCartOpen, changeQty, removeItem, clearCart, cartCount, cartTotal } = useCart();
  const { wishlistCount } = useWishlist();
  const { currentUser } = useAuth();
  const [orderSuccess, setOrderSuccess] = useState(null);

  // Fetch books once and combine with dummy books for search
  useEffect(() => {
    axios.get(`${API_BASE_URL}/books`)
      .then(res => {
        const backendBooks = Array.isArray(res.data) ? res.data : [];
        setAllBooks([...backendBooks, ...ALL_DUMMY_BOOKS]);
      })
      .catch(err => {
        console.log(err);
        setAllBooks(ALL_DUMMY_BOOKS);
      });
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [searchOpen]);

  // Filter books on query change
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const filtered = allBooks.filter(book =>
        book.title?.toLowerCase().includes(query.toLowerCase()) ||
        book.desc?.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query, allBooks]);

  const handleClose = () => {
    setSearchOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const summary = {
      orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      count: cartCount,
      total: cartTotal.toFixed(2),
    };
    setOrderSuccess(summary);
    clearCart();
    setCartOpen(false);
  };

  const placeholders = [
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
  ];

  const getCover = (cover, id) => {
    if (cover && (cover.startsWith('http') || cover.startsWith('/') || cover.startsWith('data:'))) return cover;
    return placeholders[id % placeholders.length];
  };

  return (
    <>
      <nav className="global-navbar">
        <div className="navbar-container">
          {/* Left: Logo */}
          <div className="navbar-section left">
            <Link to="/" className="navbar-logo">
              <img src="/logo.svg" alt="Mher Book Shop Logo" />
              <span>Mher Book Shop</span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="navbar-section center">
            <div className="nav-item nav-dropdown">
              <span>BOOKS</span>
              <ChevronDown size={14} />
              <div className="dropdown-menu">
                <Link to="/?category=fiction" className="dropdown-item">Fiction</Link>
                <Link to="/?category=non-fiction" className="dropdown-item">Non Fiction</Link>
                <Link to="/?category=children" className="dropdown-item">Children Books</Link>
              </div>
            </div>
            <div className="nav-item nav-dropdown">
              <span>ACADEMIC BOOKS</span>
              <ChevronDown size={14} />
              <div className="dropdown-menu">
                <Link to="/?category=textbooks" className="dropdown-item">School textbooks</Link>
                <Link to="/?category=past-papers" className="dropdown-item">Past papers</Link>
                <Link to="/?category=test-prep" className="dropdown-item">Test preparations</Link>
              </div>
            </div>
            <div className="nav-item nav-dropdown">
              <span>STATIONERY &amp; SUPPLIES</span>
              <ChevronDown size={14} />
              <div className="dropdown-menu">
                <Link to="/?category=writing-tools" className="dropdown-item">Writing tools</Link>
                <Link to="/?category=calculators" className="dropdown-item">Calculators</Link>
                <Link to="/?category=school-bags" className="dropdown-item">School bags</Link>
              </div>
            </div>
            <Link to="/add" className="nav-item add-link">
              <span>ADD BOOK</span>
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="navbar-section right">
            <button className="icon-btn" title="Search" onClick={() => setSearchOpen(true)}>
              <Search size={20} />
            </button>
            
            {currentUser ? (
              <Link to="/account" className="navbar-user-btn" title="My Account">
                <div className="navbar-user-avatar">
                  {(currentUser.username || currentUser.email || '?')[0].toUpperCase()}
                </div>
                <span className="navbar-username">{currentUser.username || currentUser.email.split('@')[0]}</span>
              </Link>
            ) : (
              <Link to="/account" className="icon-btn navbar-user-icon" title="Login / Register">
                <User size={20} />
              </Link>
            )}

            <Link to="/wishlist" className="icon-btn cart-icon-btn" title="Favorites">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="cart-badge">{wishlistCount}</span>
              )}
            </Link>

            {/* Cart Icon with badge */}
            <button
              className="icon-btn cart-icon-btn"
              title="Cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Cart Sidebar ===== */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className="cart-header">
              <div className="cart-header-title">
                <ShoppingCart size={20} className="cart-header-icon" />
                <h2>Your Cart</h2>
                {cartCount > 0 && <span className="cart-count-pill">{cartCount} items</span>}
              </div>
              <button className="icon-btn cart-drawer-close" onClick={() => setCartOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="cart-divider" />

            {/* Empty State */}
            {cartItems.length === 0 && (
              <div className="cart-empty">
                <div className="cart-empty-icon">
                  <ShoppingBag size={52} strokeWidth={1.2} />
                </div>
                <h3>Your cart is empty</h3>
                <p>Browse our collection and add books you love.</p>
                <button className="btn btn-primary cart-browse-btn" onClick={() => setCartOpen(false)}>
                  Browse Books
                </button>
              </div>
            )}

            {/* Cart Items */}
            {cartItems.length > 0 && (
              <>
                <div className="cart-items-list">
                  {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                      <img
                        src={getCover(item.cover, item.id)}
                        alt={item.title}
                        className="cart-item-img"
                        onError={e => { e.target.src = placeholders[item.id % placeholders.length]; }}
                      />
                      <div className="cart-item-info">
                        <h4 className="cart-item-title">{item.title}</h4>
                        <span className="cart-item-price">
                          {item.price === 0 || item.price === '' ? 'Free' : `$${parseFloat(item.price).toFixed(2)}`}
                        </span>
                        {/* Qty controls */}
                        <div className="cart-item-qty">
                          <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>
                            <Minus size={13} />
                          </button>
                          <span className="qty-value">{item.qty}</span>
                          <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                      <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="cart-footer">
                  <div className="cart-divider" />
                  <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>
                  <p className="cart-shipping-note">Shipping &amp; taxes calculated at checkout</p>
                  <button className="btn btn-primary cart-checkout-btn" onClick={handleCheckout}>
                    Proceed to Checkout
                  </button>
                  <button
                    className="btn btn-secondary cart-continue-btn"
                    onClick={() => setCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={handleClose}>
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            {/* Search Input */}
            <div className="search-input-wrapper">
              <Search size={22} className="search-icon-inner" />
              <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search books by title or description..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <button className="icon-btn search-close-btn" onClick={handleClose}>
                <X size={22} />
              </button>
            </div>

            {/* Results */}
            <div className="search-results">
              {query.trim() === '' && (
                <p className="search-hint">Start typing to search books...</p>
              )}
              {query.trim() !== '' && results.length === 0 && (
                <p className="search-hint">No books found for "<strong>{query}</strong>"</p>
              )}
              {results.map(book => (
                <Link to="/" key={book.id} className="search-result-item" onClick={handleClose}>
                  <img
                    src={getCover(book.cover, book.id)}
                    alt={book.title}
                    className="search-result-img"
                    onError={e => { e.target.src = placeholders[book.id % placeholders.length]; }}
                  />
                  <div className="search-result-info">
                    <h4>{book.title}</h4>
                    <p>{book.desc || 'No description'}</p>
                  </div>
                  {book.price != null && (
                    <span className="search-result-price">
                      {book.price === 0 || book.price === '' ? 'Free' : `$${book.price}`}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Success Modal Popup */}
      {orderSuccess && (
        <div className="checkout-modal-overlay" onClick={() => setOrderSuccess(null)}>
          <div className="checkout-modal-card" onClick={e => e.stopPropagation()}>
            <button className="checkout-modal-close" onClick={() => setOrderSuccess(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="checkout-modal-icon-wrap">
              <CheckCircle2 size={56} className="checkout-success-icon" />
            </div>
            <h2 className="checkout-modal-title">Order Placed Successfully!</h2>
            <p className="checkout-modal-subtitle">
              Aapka order successfully place ho gaya hai! Thank you for shopping with us.
            </p>
            <div className="checkout-modal-details">
              <div className="checkout-detail-row">
                <span>Order ID</span>
                <strong className="order-id-badge">#{orderSuccess.orderId}</strong>
              </div>
              <div className="checkout-detail-row">
                <span>Total Items</span>
                <strong>{orderSuccess.count} {orderSuccess.count === 1 ? 'item' : 'items'}</strong>
              </div>
              <div className="checkout-detail-row">
                <span>Total Amount</span>
                <strong className="checkout-total-price">${orderSuccess.total}</strong>
              </div>
              <div className="checkout-detail-row">
                <span>Status</span>
                <span className="checkout-status-badge">✓ Confirmed</span>
              </div>
            </div>
            <button
              className="btn btn-primary checkout-modal-btn"
              onClick={() => setOrderSuccess(null)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
