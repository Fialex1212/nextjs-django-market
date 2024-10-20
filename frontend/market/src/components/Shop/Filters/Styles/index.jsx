import { stylesData } from "../../utils";
import css from "./style.module.css";
import cn from "classnames";
import Link from "next/link";

const Styles = ({ isStylesOpen, setIsStylesOpen }) => {
  const toggleStyles = (e) => {
    e.stopPropagation();
    setIsStylesOpen(!isStylesOpen);
  };

  return (
    <div className={css.filters__styles}>
      <h4
        className={cn(css.filters__title, { [css.active]: isStylesOpen })}
        onClick={toggleStyles}
      >
        Dress Style
      </h4>
      {isStylesOpen && (
        <ul className={css.styles__list}>
          {stylesData.map(({ name, slug }, index) => (
            <li className={css.styles__item} key={index}>
              <Link className={css.styles__link} href={slug}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Styles;
