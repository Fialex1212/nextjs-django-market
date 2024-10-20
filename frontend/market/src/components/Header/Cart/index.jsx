"use client"


import { useEffect } from "react";
import css from "./style.module.css";
import cartIcon from "@/app/static/icons/header/cart.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <div
          className={css.cart}
          data-cart={cart.length >= 9 ? "9+" : cart.length}
        >
          <Link href="/cart">
            <Image className={css.cart__img} src={cartIcon} alt="cart" />
          </Link>
        </div>
      ) : (
        <div
          className={css.cart__empty}
        >
          <Link href="/cart">
            <Image className={css.cart__img} src={cartIcon} alt="cart" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
