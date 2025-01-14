import { colorsData } from "../../utils";
import css from "./style.module.css";
import cn from "classnames";
import toast from "react-hot-toast";
import useColorsStore from "@/stores/useColorsStore";

const Colors = ({ isColorsOpen, setIsColorsOpen }) => {
  const { selectedColors, setSelectedColors } = useColorsStore();

  const darkenColor = (color) => {
    let num = parseInt(color, 16);
    let r = (num >> 16) - 30;
    let g = ((num >> 8) & 0x00ff) - 30;
    let b = (num & 0x0000ff) - 30;
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  };

  const handleColorClick = (name) => {
    if (selectedColors.includes(name)) {
      setSelectedColors(selectedColors.filter((color) => color !== name));
      toast.success(`You deleted color ${name}`);
    } else {
      setSelectedColors([...selectedColors, name]);
      toast.success(`You selected color ${name}`);
    }
  };

  const toggleColors = (e) => {
    e.stopPropagation();
    setIsColorsOpen(!isColorsOpen);
  };

  return (
    <div className={css.filters__colors}>
      <h4
        className={cn(css.filters__title, { [css.active]: isColorsOpen })}
        onClick={toggleColors}
      >
        Colors
      </h4>
      {isColorsOpen && (
        <ul className={css.colors__list}>
          {colorsData.map(({ name, color }, index) => (
            <li
              className={cn(css.colors__item, {
                [css.colors__selected]: selectedColors.includes(name),
              })}
              key={index}
              style={{
                backgroundColor: `#${color}`,
                border: `2px solid ${darkenColor(color)}`,
              }}
              onClick={() => handleColorClick(name)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Colors;
