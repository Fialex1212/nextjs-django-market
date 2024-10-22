import { useState, useEffect } from "react";
import css from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/static/icons/header/logo.svg";
import menu from "@/app/static/icons/header/menu.svg";
import user from "@/app/static/icons/header/user.svg";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Cart from "./Cart";
import { headerData, headerDropMenu, headerInterface } from "./utils";

import cn from "classnames";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { token } = useAuth();
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);
  const [isSidebarDropDownMenu, setIsSidebarDropDownMenu] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggelDropDown = () => {
    setIsDropDownMenu(!isDropDownMenu);
    console.log("swithc drop down");
  };

  const toggelSidebarDropDown = () => {
    setIsSidebarDropDownMenu(!isSidebarDropDownMenu);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log("switch sidebar");
  };

  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setIsDropDownMenu(true);
    }, 1);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsDropDownMenu(false);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "";
    }
  }, [isSidebarVisible]);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__inner}>
          <nav className={css.header__nav}>
            <Sidebar
              toggleSidebar={toggleSidebar}
              isVisible={isSidebarVisible}
              isSideBarDropDownMenu={isSidebarDropDownMenu}
              setIsSideBarDropDownMenu={setIsSidebarDropDownMenu}
              toggelSidebarDropDown={toggelSidebarDropDown}
            />
            <button
              onClick={toggleSidebar}
              className={css.header__menu}
              href="/"
            >
              <Image src={menu} alt="menu" />
            </button>
            <Link href="/" className={css.header__logo}>
              <Image src={logo} alt="logo" />
            </Link>
            <ul className={css.header__list}>
              <li className={css.header__item}>
                <Link
                  className={cn(css.header__button, {
                    [css.active]: isDropDownMenu,
                  })}
                  href="/shop"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Shop
                </Link>
                <ul
                  className={cn(css.dropdown__list, {
                    [css.active__dropdown]: isDropDownMenu,
                  })}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {headerDropMenu.map(({ name, slug }, index) => (
                    <li className={css.dropdown__item} key={index}>
                      <Link href={slug}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {headerData.map(({ name, slug }, id) => (
                <li className={css.header__item} key={id}>
                  <Link className={css.header__link} href={slug}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={css.header__interface}>
            <Search />
            <Cart />
            {token ? (
              <Link href="/login">
                <Image className={css.user} src={user} alt="user-account" />
              </Link>
            ) : (
              <Link href="/profile">
                <Image className={css.user} src={user} alt="user-account" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
