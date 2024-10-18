import css from "./style.module.css";
// import { RangeSlider } from "rsuite";
// import 'rsuite/dist/rsuite.css';

import cn from "classnames";

const Price = ({ isPriceOpen, setIsPriceOpen }) => {
  const togglePrice = (e) => {
    e.stopPropagation();
    setIsPriceOpen(!isPriceOpen);
  };

  return (
    <div className={css.filters__price} onClick={(e) => togglePrice(e)}>
      <h4 className={cn(css.filters__title, { [css.active]: isPriceOpen })}>
        Price
      </h4>
      {isPriceOpen && <>10-50</>}
    </div>
  );
};

export default Price;
