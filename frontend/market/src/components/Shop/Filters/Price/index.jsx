import css from "./style.module.css";
import cn from "classnames";
import React, { useState } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";

const Price = ({ isPriceOpen, setIsPriceOpen }) => {
  const [values, setValues] = useState([1, 100]);

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
      {isPriceOpen && <RangeSlider values={values} setValues={setValues} />}
    </div>
  );
};

export default Price;
