"use client"

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Load token from localStorage on initial load
    const savedToken = JSON.parse(localStorage.getItem("jwt-token"));
    if (savedToken) setToken(savedToken);
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("jwt-token", JSON.stringify(newToken));
  };

  const clearToken = () => {
    setToken(null);
    localStorage.removeItem("jwt-token");
  };

  return (
    <AuthContext.Provider value={{ token, updateToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
