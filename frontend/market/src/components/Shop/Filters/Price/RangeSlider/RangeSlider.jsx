import React from "react";
import { Slider } from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ value, onChange }) => {
  return (
    <div>
      <Slider
        range
        value={value}
        min={0}
        max={100}
        step={1}
        onChange={onChange}
        allowCross={false}
      />
      <div style={{ marginTop: "1rem" }}>
        Current Range: {value[0]} - {value[1]}
      </div>
    </div>
  );
};

export default RangeSlider;
