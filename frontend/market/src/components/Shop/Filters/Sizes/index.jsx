import { useSizesSorting } from "@/contexts/sizesContext";
import { sizesData } from "../../utils";
import css from "./style.module.css";
import cn from "classnames";
import toast, { Toaster } from "react-hot-toast";

const Sizes = ({
  isSizesOpen,
  setIsSizesOpen,
}) => {
  
  const {selectedSizes, setSelectedSizes} = useSizesSorting()

  const handleSizeClick = (name) => {
    if (selectedSizes.includes(name)) {
      setSelectedSizes(selectedSizes.filter((size) => size !== name));
      toast.success(`You deleted size ${name}`);
    } else {
      setSelectedSizes([...selectedSizes, name]);
      toast.success(`You selected size ${name}`);
    }
  };

  const toggleSizes = (e) => {
    e.stopPropagation();
    setIsSizesOpen(!isSizesOpen);
  };

  return (
    <div className={css.filters__sizes}>
      <h4
        className={cn(css.filters__title, { [css.active]: isSizesOpen })}
        onClick={toggleSizes}
      >
        Sizes
      </h4>
      {isSizesOpen && (
        <ul className={css.sizes__list}>
          {sizesData.map(({ name }, index) => (
            <li
              className={cn(css.sizes__item, {
                [css.size__selected]: selectedSizes.includes(name),
              })}
              key={index}
              onClick={() => handleSizeClick(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sizes;
