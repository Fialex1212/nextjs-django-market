"use client";

import { useState } from "react";
import css from "./style.module.css";
import Image from "next/image";
import cn from "classnames";

import parametersIcon from "@/app/static/icons/shop/parameters.svg";
import closeIcon from "@/app/static/icons/shop/close.svg";

import Colors from "./Colors";
import Price from "./Price";
import Sizes from "./Sizes";
import Styles from "./Styles";
import Types from "./Types";

const Parameters = ({ toggleParameters, isParametersVisilbe }) => {
  const [activeType, setActiveType] = useState("");
  const [activeSubType, setActiveSubType] = useState("");
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [isStylesOpen, setIsStylesOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  return (
    <>
      <div
        className={cn(css.parameters__background, {
          [css.visible__background]: isParametersVisilbe,
        })}
      ></div>
      <div
        className={cn(css.parameters, {
          [css.visible]: isParametersVisilbe,
        })}
      >
        <div className={css.parameters__header}>
          <h4 className={css.header__title}>Filters</h4>
          <Image
            className={css.parameters__icon}
            src={parametersIcon}
            alt="fillters icon"
          />
          <button className={css.parameters__close} onClick={toggleParameters}>
            <Image
              className={css.close__icon}
              src={closeIcon}
              alt="close button"
            />
          </button>
        </div>
        <Types activeType={activeType} setActiveType={setActiveType} />
        <Price isPriceOpen={isPriceOpen} setIsPriceOpen={setIsPriceOpen} />
        <Colors
          isColorsOpen={isColorsOpen}
          setIsColorsOpen={setIsColorsOpen}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
        />
        <Sizes
          isSizesOpen={isSizesOpen}
          setIsSizesOpen={setIsSizesOpen}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
        <Styles
          isStylesOpen={isStylesOpen}
          setIsStylesOpen={setIsStylesOpen}
          activeSubType={activeSubType}
          setActiveSubType={setActiveSubType}
        />
        <button className={css.parameters__button}>Apply Filter</button>
      </div>
    </>
  );
};

export default Parameters;
