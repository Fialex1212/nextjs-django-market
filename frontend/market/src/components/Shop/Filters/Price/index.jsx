"use client"

import css from "./style.module.css";
import cn from "classnames";
import React from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import usePriceStore from "@/stores/usePriceStore";

const Price = ({ isPriceOpen, setIsPriceOpen }) => {
  
  const {priceValue, setPriceValue} = usePriceStore()

  const togglePrice = (e) => {
    e.stopPropagation();
    setIsPriceOpen(!isPriceOpen);
  };

  return (
    <div className={css.filters__price}>
      <h4
        className={cn(css.filters__title, { [css.active]: isPriceOpen })}
        onClick={togglePrice}
      >
        Price
      </h4>
      {isPriceOpen && <RangeSlider priceValue={priceValue} setPriceValue={setPriceValue} />}
    </div>
  );
};

export default Price;
