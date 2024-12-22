import React from "react";
import css from "./style.module.css";
import cn from "classnames";
import { sortbyData } from "../../utils";

const Sortby = ({
  isOpenDropdown,
  toggleDropdown,
  selectedValue,
  handleSelect,
}) => {
  return (
    <div className={css.products__sortby}>
      <p>
        Sort by:
        <button
          onClick={toggleDropdown}
          className={cn(css.products__dropdown, {
            [css.active]: isOpenDropdown,
          })}
        >
          {selectedValue}
        </button>
      </p>
      {isOpenDropdown && (
        <ul className={css.sortby__list}>
          {sortbyData.map(({name}, index) => (
            <li className={css.sortby__item} key={index}>
              <a onClick={() => handleSelect(name)}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sortby;
