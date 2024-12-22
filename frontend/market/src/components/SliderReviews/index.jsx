"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import css from "./style.module.css";
import { reviews } from "./utils";
import Image from "next/image";
import checked from "@/app/static/icons/checked.svg"

const SliderReviews = ({ breakpoints }) => {
  return (
    <>
      <Swiper className="mySwiper" loop={true} breakpoints={breakpoints}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={css.review__item}>
              <div className={css.review__rating}>
                <Rating
                  value={review.rating}
                  readOnly
                  style={{ maxWidth: 110 }}
                />
              </div>
              <div className={css.review__user}>
                <p>{review.user.email}</p>
                <Image src={checked} alt="checked" width={19.5} height={19.5} />
              </div>
              <p className={css.review__text}>"{review.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderReviews;
