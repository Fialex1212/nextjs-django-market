"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import css from "./style.module.css";
import { productsData } from "../utils";
import Image from "next/image";
import filtersIcon from "@/app/static/icons/shop/filtersMobile.svg";
import cn from "classnames";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import useCart from "@/hooks/useCart";
import { Toaster } from "react-hot-toast";

const Products = ({ toggleFilters }) => {
  const router = useRouter();
  const { cart, addToCart } = useCart();
  const start =  0;
  let end = 8;
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Casual");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products/products/?start=${start}&end=${end}`
      );
      setProducts(response.data);
      console.log("Products were successfully fetched!");
      console.log(response.data);
    } catch (error) {
      console.log("Error with fetching products!");
    }
  };

  const LoadMore = () => {
    end += 9
    getProducts()
  }

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

  const countDiscount = (price, discount) => {
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
      sizes: item.sizes,
      category: item.category,
      quantity: item.quantity,
      availability_status: item.availability_status,
    });
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;
    getProducts(start, end);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={css.products}>
      <Toaster />
      <div className={css.products__params}>
        <h3 className={css.products__title}>{selectedValue}</h3>
        <div className={css.products__sortby}>
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
            title,
            image,
            price,
            rating,
            availability_status,
            discount,
            description,
            colors,
            sizes,
            category,
            sex,
          }) => (
            <li className={cn(css.products__item)} key={id}>
              <Link className={css.product__link} href={`/shop/${category}/${sex}/${id}`}>
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
                          ${countDiscount(price, discount)}
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
                        title,
                        image,
                        price,
                        rating,
                        availability_status,
                        discount,
                        description,
                        colors,
                        sizes,
                        category,
                        sex,
                      },
                      e
                    )
                  }
                >
                </button>
              )}
            </li>
          )
        )}
      </ul>
      <div className={css.products__pagination}>
        <button className={css.pagination__button} onClick={() => LoadMore()}>Load more</button>
      </div>
    </div>
  );
};

export default Products;
