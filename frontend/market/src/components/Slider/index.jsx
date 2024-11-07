"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import css from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import useCart from "@/hooks/useCart";

const Slider = ({ breakpoints, data }) => {
  const { cart, addToCart } = useCart();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products/products/?start=${0}&end=${8}`
      );
      setProducts(
        response.data.filter(
          (product) => product.availability_status === "in_stock"
        )
      );
      console.log("Products were successfully fetched!");
      console.log(response.data);
    } catch (error) {
      console.log("Error with fetching products!");
    }
  };

  const countDiscount = (price, discount) => {
    const discountRate = discount / 100;
    return Math.round(price / (1 - discountRate));
  };

  const handleAddToCart = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      rating: item.rating,
      availability_status: item.availability_status,
      discount: item.discount,
      description: item.description,
      colors: item.colors,
      sizes: item.sizes,
      category: item.category,
      sex: item.sex,
      quantity: item.quantity,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Swiper className="mySwiper" loop={true} breakpoints={breakpoints}>
        {products.map(
          (
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
            index
          ) => (
            <SwiperSlide key={index}>
              <li className={cn(css.products__item)} key={id}>
                <Link
                  className={css.product__link}
                  href={`/shop/${category}/${sex}/${id}`}
                >
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
                    {availability_status === "in_stock" && (
                      <button
                        className={cn({
                          [css.add__to__cart]:
                            availability_status === "in_stock",
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
                      ></button>
                    )}
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
              </li>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default Slider;
