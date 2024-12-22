import { brandsData } from "../../utils";
import css from "./style.module.css";
import cn from "classnames";
import toast from "react-hot-toast";
import { useBrandsSorting } from "@/contexts/brandsContext";


const Brands = ({ isBrandsOpen, setIsBrendsOpen }) => {

  const { selectedBrands, setSelectedBrands } = useBrandsSorting();
  
  const handleBrandClick = (name) => {
    if (selectedBrands.includes(name)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== name));
      toast.success(`You deleted brand ${name}`);
    } else {
      setSelectedBrands([...selectedBrands, name]);
      toast.success(`You selected brand ${name}`);
    }
  };

  const toggleBrands = (e) => {
    e.stopPropagation();
    setIsBrendsOpen(!isBrandsOpen);
  };

  return (
    <div className={css.filters__colors}>
      <h4
        className={cn(css.filters__title, { [css.active]: isBrandsOpen })}
        onClick={toggleBrands}
      >
        Brands
      </h4>
      {isBrandsOpen && (
        <ul className={css.brands__list}>
          {brandsData.map(({ name }, index) => (
            <li
              className={cn(css.brands__item, {
                [css.brands__selected]: selectedBrands.includes(name),
              })}
              key={index}
              onClick={() => handleBrandClick(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Brands;
