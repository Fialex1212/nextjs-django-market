import RangeSlider from "./RangeSlider/RangeSlider";
import css from "./style.module.css";
import cn from "classnames";
import React, { useState } from "react";

const Price = ({ isPriceOpen, setIsPriceOpen }) => {
  const [rangeValue, setRangeValue] = useState([20, 80]);

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
      {/* {isPriceOpen && <RangeSlider value={rangeValue} onChange={setRangeValue} />}
      {isPriceOpen && <div>Current Range: {rangeValue[0]} - {rangeValue[1]}</div>} */}
    </div>
  );
};

export default Price;

