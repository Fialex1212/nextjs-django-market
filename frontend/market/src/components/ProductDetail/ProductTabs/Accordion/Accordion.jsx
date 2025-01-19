import React, { useState } from "react";
import css from "./style.module.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={css.accordion}>
      <div
        className={css.accordion__header}
        onClick={() => handleAccordionClick()}
      >
        <p className={css.accordion__title}>{title}</p>
        <p>{isActive ? "-" : "+"}</p>
      </div>
      {isActive && (
        <div
          className={`${css.accordion__content} ${isActive ? css.active : ""}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
