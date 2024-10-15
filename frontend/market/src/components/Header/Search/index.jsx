import { useState } from "react";
import css from "./style.module.css";
import searchDark from "@/app/static/icons/header/searchDark.svg";
import Image from "next/image";

const Search = () => {
  const [isPopupOpend, setIsPopupOpend] = useState(false);
  const [searchData, setSearchData] = useState({
    search: "",
  });

  const togglePopup = () => {
    setIsPopupOpend((prev) => !prev);
  };

  const handleInput = (e) => {
    const [nave, value] = e.target;
  };

  return (
    <div className={css.search}>
      <div className={css.input__inner}>
        <label >
          <input
            type="text"
            className={css.search__input}
            placeholder="Search for products..."
            name="search"
            value={searchData.value}
          />
        </label>
      </div>
      <button className={css.search__button} onClick={togglePopup}>
        <Image className={css.search__icon} src={searchDark} alt="search" />
      </button>
    </div>
  );
};

export default Search;
