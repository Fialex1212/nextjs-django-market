"use client"

import { useState, useEffect } from "react";
import Filters from "./Filters";
import Products from "./Products";
import css from "./style.module.css";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const [isFiltersVisilbe, setIsFiltersVisible] = useState(false);

  const toggleFilters = () => setIsFiltersVisible(!isFiltersVisilbe);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsFiltersVisible(true);
      } else {
        setIsFiltersVisible(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="container">
        <div className={css.shop__inner}>
          <Filters toggleFilters={toggleFilters} isFiltersVisilbe={isFiltersVisilbe} />
          <Products toggleFilters={toggleFilters} />
          <Toaster />
        </div>
      </div>
    </section>
  );
};

export default Shop;
