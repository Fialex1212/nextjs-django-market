"use client";

import css from "./style.module.css";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const Discount = () => {
  const [discountShow, setDiscountShow] = useState(true);

  return (
    discountShow && (
      <section className={css.discount}>
        <div className="container">
          <div className={css.discount__inner}>
            <p className={css.discount__text}>
              Sign up and get 20% off to your first order.
              <Link className={css.discount__link} href="/">
                Sign Up Now
              </Link>
            </p>
            <button
              className={css.discount__close}
              onClick={() => setDiscountShow(false)}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      </section>
    )
  );
};

export default Discount;
