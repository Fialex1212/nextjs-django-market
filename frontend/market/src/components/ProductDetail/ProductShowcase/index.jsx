import React from "react";
import Image from "next/image";
import css from "./style.module.css";
import { Rating } from "@smastrom/react-rating";

const ProductShowcase = ({ product }) => {
  return (
    <div className={css.product__showcase}>
      <div className={css.product__image}>
        <Image
          className={css.product__image}
          src={`http://127.0.0.1:8000/${product.image}`}
          alt={product.title}
          width={444}
          height={530}
        />
      </div>
      <div className={css.product__info}>
        <h3>{product.title}</h3>
        <p className={css.product__rating}>
          <Rating value={product.rating} readOnly style={{ maxWidth: 110 }} />
          <div>{product.rating}/5</div>
        </p>
      </div>
    </div>
  );
};

export default ProductShowcase;
