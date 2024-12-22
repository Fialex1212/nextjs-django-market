import React from "react";
import Image from "next/image";
import css from "./style.module.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductShowcase = ({ product }) => {

  const countDiscount = (price, discount) => {
    const discountRate = discount / 100;
    return Math.round(price / (1 - discountRate));
  };

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
        <h3 className={css.product__title}>{product.title}</h3>
        <div className={css.product__rating}>
          <Rating value={product.rating} readOnly style={{ maxWidth: 110 }} />
          <div>{product.rating}/5</div>
        </div>
        <div className={css.price__block}>
          <p className={css.product__price}>${product.price}</p>
          {product.discount !== 0 && (
            <div className={css.discount__info}>
              <p className={css.old__price}>
                ${countDiscount(product.price, product.discount)}
              </p>
              <p className={css.discount__price}>-{product.discount}%</p>
            </div>
          )}
        </div>
        <p className={css.product__description}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductShowcase;
