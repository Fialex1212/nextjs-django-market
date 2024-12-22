"use client";

import { useState } from "react";
import css from "./style.module.css";
import Link from "next/link";
import { headerData, headerDropMenu } from "./utils";
import cn from "classnames";

const Sidebar = ({
  toggleSidebar,
  isVisible,
  isSideBarDropDownMenu,
  setIsSideBarDropDownMenu,
  toggelSidebarDropDown,
}) => {
  return (
    <div className={cn(css.sidebar, { [css.sidebar__show]: isVisible })}>
      <aside className={cn(css.sidebar__menu, { [css.show]: isVisible })}>
        <ul className={css.sidebar__list}>
          <li className={css.sidebar__item}>
            <button
              className={cn(css.header__button, {
                [css.active]: isSideBarDropDownMenu,
              })}
              onClick={toggelSidebarDropDown}
            >
              Shop
            </button>
            <ul
              className={cn(css.dropdown__list, {
                [css.active]: isSideBarDropDownMenu,
              })}
            >
              {headerDropMenu.map(({ name, slug }, index) => (
                <li className={css.dropdown__item} key={index}>
                  <Link href={slug}>{name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {headerData.map(({ name, slug }, id) => (
            <li className={css.sidebar__item} key={id}>
              <Link href={slug}>{name}</Link>
            </li>
          ))}
        </ul>
        <button className={css.sidebar__close} onClick={toggleSidebar}></button>
      </aside>
    </div>
  );
};

export default Sidebar;
