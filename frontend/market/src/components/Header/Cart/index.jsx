import css from "./style.module.css";
import cart from "@/app/static/icons/header/cart.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(9)

  return (
    <div className={css.cart}>
      <Link  href="/cart">
        <Image className={css.cart__img} src={cart} alt="cart" />
      </Link>
    </div>
  );
};

export default Cart;
