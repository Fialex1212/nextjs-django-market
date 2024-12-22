import { useState, useEffect } from "react";
import cn from "classnames";
import css from "./style.module.css";
import { tabsData } from "../utils";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("productDetail");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  useEffect(() => {
    setActiveTab("productDetail")
  }, [])
  
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
              <h2>{tabsData[activeTab].title}</h2>
              {Array.isArray(tabsData[activeTab].content) ? (
                <ul>
                  {tabsData[activeTab].content.map((item, index) => (
                    <li key={index}>
                      {item.user ? (
                        <>
                          <strong>{item.user}:</strong> {item.review} (Rating:{" "}
                          {item.rating})
                        </>
                      ) : (
                        <>
                          <strong>{item.question}:</strong> {item.answer}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{tabsData[activeTab].content}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
