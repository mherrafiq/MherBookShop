import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { API_BASE_URL } from '../config';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Fetch cart items from backend for logged in user, or from local storage for guest
  const fetchUserCart = useCallback(async (userId) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/cart/${userId}`);
      if (Array.isArray(res.data)) {
        setCartItems(res.data);
      }
    } catch (err) {
      console.error("Error fetching cart from database:", err);
    }
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      fetchUserCart(currentUser.id);
    } else {
      try {
        const local = localStorage.getItem('guestCart');
        if (local) setCartItems(JSON.parse(local));
        else setCartItems([]);
      } catch (e) {
        setCartItems([]);
      }
    }
  }, [currentUser, fetchUserCart]);

  // Save guest cart if not logged in
  useEffect(() => {
    if (!currentUser) {
      try {
        localStorage.setItem('guestCart', JSON.stringify(cartItems));
      } catch (e) {}
    }
  }, [cartItems, currentUser]);

  // Lock body scroll when cart is open
  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  const addToCart = async (book) => {
    // Check if book has a numeric id (database book)
    const isDbBook = typeof book.id === 'number' || (!isNaN(book.id) && !String(book.id).startsWith('dummy'));

    if (currentUser && currentUser.id && isDbBook) {
      try {
        await axios.post(`${API_BASE_URL}/cart`, {
          userId: currentUser.id,
          bookId: parseInt(book.id),
          quantity: 1
        });
        // Refresh cart from database to stay in exact sync
        await fetchUserCart(currentUser.id);
        return;
      } catch (err) {
        console.error("Error adding to MySQL cart:", err);
      }
    }

    // Local / Guest fallback
    setCartItems(prev => {
      const existing = prev.find(i => i.id === book.id);
      if (existing) {
        return prev.map(i => i.id === book.id ? { ...i, qty: (i.qty || 1) + 1 } : i);
      }
      return [...prev, { ...book, qty: 1 }];
    });
  };

  const changeQty = async (id, delta) => {
    const isDbBook = typeof id === 'number' || (!isNaN(id) && !String(id).startsWith('dummy'));
    const currentItem = cartItems.find(i => i.id === id);
    const newQty = (currentItem ? (currentItem.qty || 1) : 1) + delta;

    if (currentUser && currentUser.id && isDbBook) {
      try {
        await axios.put(`${API_BASE_URL}/cart/${currentUser.id}/${id}`, {
          quantity: newQty
        });
        await fetchUserCart(currentUser.id);
        return;
      } catch (err) {
        console.error("Error updating cart quantity:", err);
      }
    }

    // Local update
    setCartItems(prev =>
      prev
        .map(i => i.id === id ? { ...i, qty: (i.qty || 1) + delta } : i)
        .filter(i => (i.qty || 0) > 0)
    );
  };

  const removeItem = async (id) => {
    const isDbBook = typeof id === 'number' || (!isNaN(id) && !String(id).startsWith('dummy'));

    if (currentUser && currentUser.id && isDbBook) {
      try {
        await axios.delete(`${API_BASE_URL}/cart/${currentUser.id}/${id}`);
        await fetchUserCart(currentUser.id);
        return;
      } catch (err) {
        console.error("Error removing item from cart:", err);
      }
    }

    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = async () => {
    if (currentUser && currentUser.id) {
      try {
        await axios.delete(`${API_BASE_URL}/cart/clear/${currentUser.id}`);
      } catch (err) {
        console.error("Error clearing cart:", err);
      }
    }
    setCartItems([]);
    if (!currentUser) {
      localStorage.removeItem('guestCart');
    }
  };

  const cartCount = cartItems.reduce((sum, i) => sum + (i.qty || 1), 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + (parseFloat(i.price) || 0) * (i.qty || 1), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartOpen,
      setCartOpen,
      addToCart,
      changeQty,
      removeItem,
      clearCart,
      cartCount,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
