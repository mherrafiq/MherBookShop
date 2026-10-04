import React, { useState } from 'react';
import { Eye, EyeOff, LogOut, BookOpen, Heart, ShoppingBag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { API_BASE_URL } from '../config';

const UserAccount = () => {
  const { currentUser, login, logout } = useAuth();
  const { cartItems, setCartOpen } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  // Login Form State
  const [loginData, setLoginData] = useState({
    usernameOrEmail: '',
    password: '',
    rememberMe: false
  });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState({ text: '', isError: false });
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  // Register Form State
  const [registerData, setRegisterData] = useState({
    email: '',
    password: ''
  });
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [registerMessage, setRegisterMessage] = useState({ text: '', isError: false });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  // Handlers for Login
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginMessage({ text: '', isError: false });

    if (!loginData.usernameOrEmail || !loginData.password) {
      setLoginMessage({ text: 'Please fill in all required fields.', isError: true });
      return;
    }

    setIsLoginLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/login`, {
        usernameOrEmail: loginData.usernameOrEmail,
        password: loginData.password
      });

      const user = res.data.user;
      // AuthContext ke zariye login karo — global state update hogi
      login(user, loginData.rememberMe);

      setLoginMessage({ text: `Welcome back, ${user.username}! Redirecting...`, isError: false });

      // 1 second baad home pe redirect
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      const errorText = typeof err.response?.data === 'string'
        ? err.response.data
        : 'Login failed. Please check your credentials.';
      setLoginMessage({ text: errorText, isError: true });
    } finally {
      setIsLoginLoading(false);
    }
  };

  // Handlers for Register
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setRegisterMessage({ text: '', isError: false });

    if (!registerData.email || !registerData.password) {
      setRegisterMessage({ text: 'Please fill in all required fields.', isError: true });
      return;
    }

    setIsRegisterLoading(true);

    try {
      await axios.post(`${API_BASE_URL}/register`, {
        email: registerData.email,
        password: registerData.password
      });

      setRegisterMessage({
        text: 'Account created! You can login now',
        isError: false
      });

      // Auto-fill login email for convenience
      setLoginData(prev => ({
        ...prev,
        usernameOrEmail: registerData.email
      }));

      // Clear register form
      setRegisterData({ email: '', password: '' });
    } catch (err) {
      const errorText = typeof err.response?.data === 'string'
        ? err.response.data
        : 'Registration failed. Please try again.';
      setRegisterMessage({ text: errorText, isError: true });
    } finally {
      setIsRegisterLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // ===== LOGGED IN VIEW =====
  if (currentUser) {
    const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
    const cartTotal = cartItems.reduce((sum, i) => sum + (parseFloat(i.price) || 0) * i.qty, 0);

    return (
      <div className="user-account-page-container">
        {/* Title Header */}
        <div className="user-account-header">
          <h1 className="user-account-title">My Account</h1>
          <div className="user-account-title-underline"></div>
        </div>

        {/* Welcome Banner */}
        <div className="user-logged-in-banner">
          <div className="user-logged-in-info">
            <div className="user-avatar-circle">
              <User size={32} />
            </div>
            <div>
              <h3>Welcome back, <span>{currentUser.username || currentUser.email}</span>! 👋</h3>
              <p>Email: {currentUser.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="user-logout-btn">
            <LogOut size={16} /> Log Out
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="user-dashboard-grid">

          {/* Cart Summary Card */}
          <div className="user-dashboard-card" onClick={() => setCartOpen(true)}>
            <div className="user-dashboard-card-icon cart-icon-color">
              <ShoppingBag size={36} />
            </div>
            <div className="user-dashboard-card-info">
              <h3>My Cart</h3>
              <p className="user-dashboard-card-count">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
              {cartCount > 0 && (
                <p className="user-dashboard-card-sub">Total: <strong>${cartTotal.toFixed(2)}</strong></p>
              )}
              {cartCount === 0 && <p className="user-dashboard-card-sub">Your cart is empty</p>}
            </div>
            <div className="user-dashboard-card-arrow">→</div>
          </div>

          {/* Wishlist Summary Card */}
          <div className="user-dashboard-card" onClick={() => navigate('/wishlist')}>
            <div className="user-dashboard-card-icon wishlist-icon-color">
              <Heart size={36} />
            </div>
            <div className="user-dashboard-card-info">
              <h3>My Wishlist</h3>
              <p className="user-dashboard-card-count">{wishlistItems.length} {wishlistItems.length === 1 ? 'book' : 'books'}</p>
              {wishlistItems.length === 0 && <p className="user-dashboard-card-sub">No books saved yet</p>}
              {wishlistItems.length > 0 && (
                <p className="user-dashboard-card-sub">Click to view your saved books</p>
              )}
            </div>
            <div className="user-dashboard-card-arrow">→</div>
          </div>

          {/* Browse Books Card */}
          <div className="user-dashboard-card" onClick={() => navigate('/')}>
            <div className="user-dashboard-card-icon books-icon-color">
              <BookOpen size={36} />
            </div>
            <div className="user-dashboard-card-info">
              <h3>Browse Books</h3>
              <p className="user-dashboard-card-sub">Explore our full collection</p>
            </div>
            <div className="user-dashboard-card-arrow">→</div>
          </div>

        </div>

        {/* Wishlist Preview (if items exist) */}
        {wishlistItems.length > 0 && (
          <div className="user-wishlist-preview">
            <h2 className="user-section-title">
              <Heart size={20} /> Saved Books
            </h2>
            <div className="user-wishlist-preview-grid">
              {wishlistItems.slice(0, 4).map(book => (
                <div key={book.id} className="user-wishlist-preview-item">
                  <img
                    src={book.cover || `https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&auto=format&fit=crop&q=60`}
                    alt={book.title}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&auto=format&fit=crop&q=60'; }}
                  />
                  <div className="user-wishlist-preview-info">
                    <h4>{book.title}</h4>
                    <span>{book.price === 0 || book.price === '' ? 'Free' : `$${parseFloat(book.price || 0).toFixed(2)}`}</span>
                  </div>
                </div>
              ))}
            </div>
            {wishlistItems.length > 4 && (
              <button className="user-account-btn" onClick={() => navigate('/wishlist')} style={{marginTop: '1rem', maxWidth: '200px'}}>
                View All ({wishlistItems.length})
              </button>
            )}
          </div>
        )}

        {/* Cart Preview (if items exist) */}
        {cartItems.length > 0 && (
          <div className="user-wishlist-preview">
            <h2 className="user-section-title">
              <ShoppingBag size={20} /> Cart Items
            </h2>
            <div className="user-wishlist-preview-grid">
              {cartItems.slice(0, 4).map(item => (
                <div key={item.id} className="user-wishlist-preview-item">
                  <img
                    src={item.cover || `https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&auto=format&fit=crop&q=60`}
                    alt={item.title}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&auto=format&fit=crop&q=60'; }}
                  />
                  <div className="user-wishlist-preview-info">
                    <h4>{item.title}</h4>
                    <span>Qty: {item.qty} · ${(parseFloat(item.price || 0) * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length > 4 && (
              <button className="user-account-btn" onClick={() => setCartOpen(true)} style={{marginTop: '1rem', maxWidth: '200px'}}>
                View Cart ({cartItems.reduce((s, i) => s + i.qty, 0)} items)
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // ===== LOGGED OUT VIEW (Login + Register) =====
  return (
    <div className="user-account-page-container">
      {/* Title Header */}
      <div className="user-account-header">
        <h1 className="user-account-title">User Account</h1>
        <div className="user-account-title-underline"></div>
      </div>

      {/* Grid containing Login and Register side-by-side */}
      <div className="user-account-grid">
        
        {/* Left Side: Login Card */}
        <div className="user-account-card">
          <h2 className="user-account-card-title">Login</h2>
          
          {loginMessage.text && (
            <div className={`user-account-alert ${loginMessage.isError ? 'error' : 'success'}`}>
              {loginMessage.text}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="user-account-form">
            <div className="user-account-field">
              <label className="user-account-label" htmlFor="loginUsername">
                Username or email address <span className="user-account-asterisk">*</span>
              </label>
              <div className="user-account-input-wrapper">
                <input
                  type="text"
                  id="loginUsername"
                  name="usernameOrEmail"
                  className="user-account-input"
                  value={loginData.usernameOrEmail}
                  onChange={handleLoginChange}
                  required
                />
              </div>
            </div>

            <div className="user-account-field">
              <label className="user-account-label" htmlFor="loginPassword">
                Password <span className="user-account-asterisk">*</span>
              </label>
              <div className="user-account-input-wrapper">
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  id="loginPassword"
                  name="password"
                  className="user-account-input user-account-input-has-eye"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <button
                  type="button"
                  className="user-account-eye-btn"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="user-account-checkbox-row">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="user-account-checkbox"
                checked={loginData.rememberMe}
                onChange={handleLoginChange}
              />
              <label htmlFor="rememberMe" className="user-account-checkbox-label">
                Remember me
              </label>
            </div>

            <button type="submit" className="user-account-btn" disabled={isLoginLoading}>
              {isLoginLoading ? 'LOGGING IN...' : 'LOG IN'}
            </button>
          </form>

          <a href="#lost-password" className="user-account-lost-password" onClick={(e) => e.preventDefault()}>
            Lost your password?
          </a>
        </div>

        {/* Right Side: Register Card */}
        <div className="user-account-card">
          <h2 className="user-account-card-title">Register</h2>

          {registerMessage.text && (
            <div className={`user-account-alert ${registerMessage.isError ? 'error' : 'success'}`}>
              {registerMessage.text}
            </div>
          )}

          <form onSubmit={handleRegisterSubmit} className="user-account-form">
            <div className="user-account-field">
              <label className="user-account-label" htmlFor="registerEmail">
                Email address <span className="user-account-asterisk">*</span>
              </label>
              <div className="user-account-input-wrapper">
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  className="user-account-input"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>
            </div>

            <div className="user-account-field">
              <label className="user-account-label" htmlFor="registerPassword">
                Password <span className="user-account-asterisk">*</span>
              </label>
              <div className="user-account-input-wrapper">
                <input
                  type={showRegisterPassword ? 'text' : 'password'}
                  id="registerPassword"
                  name="password"
                  className="user-account-input user-account-input-has-eye"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
                <button
                  type="button"
                  className="user-account-eye-btn"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showRegisterPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <p className="user-account-privacy-text">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>

            <button type="submit" className="user-account-btn" disabled={isRegisterLoading}>
              {isRegisterLoading ? 'REGISTERING...' : 'REGISTER'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default UserAccount;
