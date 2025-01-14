import { stylesData } from "../../utils";
import css from "./style.module.css";
import cn from "classnames";
import toast from "react-hot-toast";
import useStylesStore from "@/stores/useStylesStore";

const Styles = ({ isStylesOpen, setIsStylesOpen }) => {
  const toggleStyles = (e) => {
    e.stopPropagation();
    setIsStylesOpen(!isStylesOpen);
  };

  const { selectedStyles, setSelectedStyles } = useStylesStore();

  const handleStyleClick = (name) => {
    if (selectedStyles.includes(name)) {
      setSelectedStyles(selectedStyles.filter((style) => style !== name));
      toast.success(`You deleted style ${name}`);
    } else {
      setSelectedStyles([...selectedStyles, name]);
      toast.success(`You selected style ${name}`);
    }
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
          {stylesData.map(({ name }, index) => (
            <li className={css.styles__item} key={index}>
              <input
                className={css.styles__link}
                type="checkbox"
                onClick={() => handleStyleClick(name)}
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Styles;
