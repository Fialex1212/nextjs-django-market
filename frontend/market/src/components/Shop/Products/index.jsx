"use client";

import { useEffect } from "react";
import css from "./style.module.css";
import { productsData } from "../utils";
import Image from "next/image";
import { useState } from "react";
import filtersIcon from "@/app/static/icons/shop/filtersMobile.svg";
import cn from "classnames";

const Products = ({ toggleFilters }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Casual");

  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpenDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
        {productsData.map(({ image, name, rating, price }, index) => (
          <li className={css.products__item} key={index}>
            <Image
              className={css.products__image}
              src={image}
              alt={name}
              width={270}
              height={270}
            />
            <p>{name}</p>
            <p>{rating}/5</p>
            <p>{price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
