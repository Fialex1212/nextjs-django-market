"use client";

import { useState } from "react";
import css from "./style.module.css";
import Image from "next/image";
import cn from "classnames";

import filtersIcon from "@/app/static/icons/shop/filters.svg";
import closeIcon from "@/app/static/icons/shop/close.svg";

import Colors from "./Colors";
import Price from "./Price";
import Sizes from "./Sizes";
import Styles from "./Styles";
import Types from "./Types";

const Filters = ({ toggleFilters, isFiltersVisilbe }) => {
  const [activeType, setActiveType] = useState("");
  const [activeSubType, setActiveSubType] = useState("");
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [isStylesOpen, setIsStylesOpen] = useState(false);

  return (
    <>
      <div
        className={cn(css.filters__background, {
          [css.visible__background]: isFiltersVisilbe,
        })}
      ></div>
      <div
        className={cn(css.filters, {
          [css.visible]: isFiltersVisilbe ,
        })}
      >
        <div className={css.filters__header}>
          <h4 className={css.header__title}>Filters</h4>
          <Image
            className={css.filters__icon}
            src={filtersIcon}
            alt="fillters icon"
          />
          <button className={css.filters__close} onClick={toggleFilters}>
            <Image
              className={css.close__icon}
              src={closeIcon}
              alt="close button"
            />
          </button>
        </div>
        {/* <Types activeType={activeType} setActiveType={setActiveType} /> */}
        <Price isPriceOpen={isPriceOpen} setIsPriceOpen={setIsPriceOpen} />
        <Colors
          isColorsOpen={isColorsOpen}
          setIsColorsOpen={setIsColorsOpen}
        />
        <Sizes
          isSizesOpen={isSizesOpen}
          setIsSizesOpen={setIsSizesOpen}
        />
        <Styles
          isStylesOpen={isStylesOpen}
          setIsStylesOpen={setIsStylesOpen}
          activeSubType={activeSubType}
          setActiveSubType={setActiveSubType}
        />
        <button className={css.filters__button}>Apply Filters</button>
      </div>
    </>
  );
};

export default Filters;
