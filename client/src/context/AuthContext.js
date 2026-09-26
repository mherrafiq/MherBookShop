import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      // localStorage pehle check karo (remember me), phir sessionStorage
      const local = localStorage.getItem('user');
      if (local) return JSON.parse(local);
      const session = sessionStorage.getItem('user');
      if (session) return JSON.parse(session);
      return null;
    } catch (e) {
      return null;
    }
  });

  const login = (user, rememberMe = false) => {
    setCurrentUser(user);
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.setItem('user', JSON.stringify(user));
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
