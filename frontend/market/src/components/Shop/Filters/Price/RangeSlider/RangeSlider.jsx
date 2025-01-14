import React from "react";
import css from "./style.module.css";
import ReactSlider from "react-slider";

const RangeSlider = ({ priceValue, setPriceValue }) => {
  const handleChange = (newValues) => {
    setPriceValue(newValues);
  };

  return (
    <>
      <div className={css.slider__container}>
        <ReactSlider
          className={css.slider}
          thumbClassName={css.thumb}
          trackClassName={css.track}
          value={priceValue}
          onChange={handleChange}
          min={1}
          step={3}
          max={1000}
          renderThumb={(props, state) => (
            <div {...props} className={css.thumb}>
              <span className={css.thumbLabel}>${state.valueNow}</span>
            </div>
          )}
          renderTrack={(props, state) => (
            <div
              {...props}
              className={
                state.index === 1 ? css.trackActive : css.trackInactive
              }
            />
          )}
        />
      </div>
    </>
  );
};

export default RangeSlider;
