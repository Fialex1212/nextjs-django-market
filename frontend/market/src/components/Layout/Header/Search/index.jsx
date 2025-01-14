import { useState } from "react";
import css from "./style.module.css";
import searchDark from "@/app/static/icons/header/searchDark.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Search = () => {
  const [isPopupOpend, setIsPopupOpend] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const togglePopup = () => {
    setIsPopupOpend((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.prevertDefault();
    if (query.trim) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className={css.search}>
      <div className={css.input__inner}>
        <form onSubmit={handleSearch}>
          <label>
            <input
              type="text"
              className={css.search__input}
              placeholder="Search for products..."
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Search;
