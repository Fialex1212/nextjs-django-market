"use client";

import { useEffect } from "react";
import css from "./style.module.css";
import { productsData } from "../utils";
import Image from "next/image";
import { useState } from "react";
import filtersIcon from "@/app/static/icons/shop/filtersMobile.svg";
import cn from "classnames";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import useCart from "@/hooks/useCart";
import { Toaster } from "react-hot-toast";

const Products = ({ toggleFilters }) => {
  const { cart, addToCart } = useCart();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Casual");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/products/products/"
      );
      setProducts(response.data);
      console.log("Products was successfuly fetched!");
      console.log(response.data);
    } catch (error) {
      console.log("Error with fetching producst!");
    }
  };

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
    return Math.round(price / (1 - discountRate));
  };

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    addToCart({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      discount: item.discount,
      new_price: item.new_price,
      description: item.description,
      colors: item.colors,
      size: item.size,
      category: item.category,
      quantity: item.quantity,
      availability_status: item.availability_status,
    });
  };

  useEffect(() => {
    getProducts();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={css.products}>
      <Toaster />
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
        {products.map(
          ({
            id,
            image,
            title,
            rating,
            price,
            discount,
            availability_status,
            description,
            colors,
            size,
            category,
            quantity,
          }) => (
            <li className={cn(css.products__item)} key={id}>
              <Link className={css.product__link} href="/">
                <div
                  className={cn(css.image__wrapper, {
                    [css.not__available]:
                      availability_status === "not_available",
                  })}
                >
                  <Image
                    className={css.products__image}
                    src={image}
                    alt={title}
                    width={270}
                    height={270}
                  />
                </div>
                <div className={css.product__info}>
                  <p className={css.product__name}>{title}</p>
                  <p className={css.product__rating}>
                    <Rating
                      value={rating}
                      readOnly
                      style={{ maxWidth: 110 }}
                    />
                    <div>{rating}/5</div>
                  </p>
                  <div className={css.product__price}>
                    <p>${price}</p>
                    {discount !== 0 && (
                      <div className={css.discount__info}>
                        <p className={css.old__price}>
                          ${countDiscound(price, discount)}
                        </p>
                        <p className={css.discount__price}>-{discount}%</p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              {availability_status === "in_stock" && (
                <button
                  className={cn({
                    [css.add__to__cart]: availability_status === "in_stock",
                  })}
                  onClick={(e) =>
                    handleAddToCart(
                      {
                        id,
                        image,
                        title,
                        rating,
                        discount,
                        price,
                        availability_status,
                        description,
                        colors,
                        size,
                        category,
                        quantity,
                      },
                      e
                    )
                  }
                ></button>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Products;
