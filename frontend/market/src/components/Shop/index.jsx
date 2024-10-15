"use client"

import { useState, useEffect } from "react";
import Parameters from "./Parameters";
import Products from "./Products";
import css from "./style.module.css";
import toast, { Toaster } from "react-hot-toast";

const Shop = () => {
  const [isParametersVisilbe, setIsParametersVisible] = useState(false);

  const toggleParameters = () => setIsParametersVisible(!isParametersVisilbe);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsParametersVisible(true);
      } else {
        setIsParametersVisible(false);
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
          <Parameters toggleParameters={toggleParameters} isParametersVisilbe={isParametersVisilbe} />
          <Products toggleParameters={toggleParameters} />
          <Toaster />
        </div>
      </div>
    </section>
  );
};

export default Shop;
