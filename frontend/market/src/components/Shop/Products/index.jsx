"use client";

import { useEffect } from "react";
import css from "./style.module.css";
import { productsData } from "../utils";
import Image from "next/image";
import { useState } from "react";
import filtersIcon from "@/app/static/icons/shop/filtersMobile.svg";
import cn from "classnames";
import Link from "next/link";

const Products = ({ toggleFilters }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Casual");

  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpenDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIsOpenDropdown(false);
    }
  };

  const countDiscound = (price, discount) => {
    const discountRate = discount / 100;
    console.log(Math.round(price / (1 - discountRate)));
    
    return Math.round(price / (1 - discountRate));
  };
  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={css.products}>
      <div className={css.products__params}>
        <h3 className={css.products__title}>{selectedValue}</h3>
        <div className={css.products__sortby}>
          <p>Showing 1-10 of 100 Products</p>
          <p>
            Sort by:
            <button
              onClick={toggleDropdown}
              className={cn(css.products__dropdown, {
                [css.active]: isOpenDropdown,
              })}
            >
              {selectedValue}
            </button>
          </p>
          {isOpenDropdown && (
            <ul className={css.sortby__list}>
              <li className={css.sortby__item}>
                <a onClick={() => handleSelect("Low to High")}>Low to High</a>
              </li>
              <li className={css.sortby__item}>
                <a onClick={() => handleSelect("High to Low")}>High to Low</a>
              </li>
              <li className={css.sortby__item}>
                <a onClick={() => handleSelect("New Arrivals")}>New Arrivals</a>
              </li>
              <li className={css.sortby__item}>
                <a onClick={() => handleSelect("Top Selling")}>Top Selling</a>
              </li>
            </ul>
          )}
        </div>
        <Image
          className={css.products__icon}
          src={filtersIcon}
          alt="parameters icon"
          onClick={toggleFilters}
        />
      </div>
      <ul className={css.products__list}>
        {productsData.map(({ image, name, rating, price, discount }, index) => (
          <li className={css.products__item} key={index}>
            <Link className={css.product__link} href="/">
              <div className={css.image__wrapper}>
                <Image
                  className={css.products__image}
                  src={image}
                  alt={name}
                  width={270}
                  height={270}
                />
              </div>
              <div className={css.product__info}>
                <p className={css.product__name}>{name}</p>
                <p className={css.product__rating}>{rating}/5</p>
                <p className={css.product__price}>${price}</p>
                {discount !== 0 && <p>{countDiscound(price, discount)}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
