"use client";

import { useState, useEffect } from "react";
import cn from "classnames";
import css from "./style.module.css";
import { tabsData } from "../utils";
import Accordion from "./Accordion/Accordion";
import Reviews from "./Reviews/Reviews";
import Image from "next/image";
import size_guide from "@/app/static/images/product/size_guide.jpg";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("productDetail");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  useEffect(() => {
    setActiveTab("productDetail");
  }, []);

  return (
    <div className={css.tabs__container}>
      <div className={css.tabs__header}>
        <ul className={css.tabs__list}>
          {Object.keys(tabsData).map((tabKey) => (
            <li
              className={cn(css.tabs__item, {
                [css.active]: activeTab === tabKey,
              })}
              key={tabKey}
              onClick={() => handleTabClick(tabKey)}
            >
              {tabsData[tabKey].title}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.tabs__content}>
        <div className={css.tabs__contentItem}>
          {tabsData[activeTab] && (
            <div>
              <h2 className={css.tabs__title}>{tabsData[activeTab].title}</h2>
              {activeTab === "reviews" ? (
                <Reviews product={product} />
              ) : activeTab === "faqs" ? (
                <ul>
                  {tabsData[activeTab].content.map(
                    ({ title, content }, index) => (
                      <li key={index}>
                        <Accordion title={title} content={content} />
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <div className={css.product__detail}>
                  <div className={css.product__size__guide__wrapper}>
                    <Image
                      className={css.product__size__guide}
                      src={size_guide}
                      alt="size guide"
                      width={500}
                      height={300}
                    />
                  </div>
                  <p className={css.product__materials}>
                    Materials: {product.materials}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
