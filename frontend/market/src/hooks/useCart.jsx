"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(updatedCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    toast.success("Successfully added to your cart");
  };

  const deleteFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    console.log("Cart after deletion:", updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  const updateItemQuantity = (id, quantity) => {
    if (quantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return { cart, addToCart, deleteFromCart, clearCart, updateItemQuantity };
};

export default useCart;
