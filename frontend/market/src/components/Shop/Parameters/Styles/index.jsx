import { stylesData } from "../../utils";
import css from "./style.module.css";
import cn from "classnames";


const Styles = ({isStylesOpen, setIsStylesOpen}) => {

  const toggleStyles = (e) => {
    e.stopPropagation();
    setIsStylesOpen(!isStylesOpen);
  };

  return (
    <div className={css.parameters__styles} onClick={toggleStyles}>
      <h4 className={cn(css.parameters__title, { [css.active]: isStylesOpen })}>Dress Style</h4>
      {isStylesOpen && (
        <ul className={css.styles__list}>
          {stylesData.map(({ name }, index) => (
            <li className={css.styles__item} key={index}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Styles;
