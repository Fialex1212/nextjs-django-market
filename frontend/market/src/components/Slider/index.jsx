"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import css from "./style.module.css"
import Image from "next/image";

const Slider = ({ breakpoints, data }) => {
  return (
    <>
      <Swiper className="mySwiper" loop={true} breakpoints={breakpoints}>
        {data.map(({ image, name, rating, price }, index) => (
          <SwiperSlide key={index}>
            <li className={css.good__item} >
              <Image
                className={css.good__img}
                src={image}
                alt={name}
                width={200}
                height={200}
              />
              <h4 className={css.good__title}>{name}</h4>
              <p>{rating}/5</p>
              <p className={css.good__price}>${price}</p>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
