"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import css from "./style.module.css";
import Image from "next/image";
import { sliderImages } from "../utils";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={css.slider__wraper}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiperBottom"
      >
        {sliderImages.map((imageObj, index) => (
          <SwiperSlide key={index}>
            <Image
              className={css.product__image}
              src={imageObj.image}
              width={768}
              height={768}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiperThumb"
        direction="horizontal"
      >
        {sliderImages.map((imageObj, index) => (
          <SwiperSlide key={index}>
            <Image src={imageObj.image} width={100} height={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
