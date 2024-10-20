import React from "react";
import css from "./style.module.css";
import ReactSlider from "react-slider";

const RangeSlider = ({ values, setValues }) => {
  const handleChange = (newValues) => setValues(newValues);

  return (
    <>
      <div className={css.slider__container}>
        <ReactSlider
          className={css.slider}
          thumbClassName={css.thumb}
          trackClassName={css.track}
          value={values}
          onChange={handleChange}
          min={1}
          max={100}
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
              } // Apply different styles to the active (between thumbs) and inactive tracks
            />
          )}
        />
      </div>
    </>
  );
};

export default RangeSlider;
