"use client";

import { useState } from "react";
import css from "./style.module.css";
import Link from "next/link";
import { headerData, headerDropMenu } from "./utils";
import cn from "classnames";

const Sidebar = ({ toggleSidebar, isVisible }) => {
  return (
    <div className={cn(css.sidebar, { [css.sidebar__show]: isVisible })}>
      <aside className={cn(css.sidebar__menu, { [css.show]: isVisible })}>
        <button onClick={toggleSidebar}>Close</button>
        <ul className={css.sidebar__list}>
          {headerData.map(({ name, slug }, id) => (
            <li className={css.sidebar__item} key={id}>
              <Link href={slug}>{name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
