import css from "./style.module.css";
import cn from "classnames";

const Price = ({ isPriceOpen, setIsPriceOpen }) => {
  const togglePrice = (e) => {
    e.stopPropagation();
    setIsPriceOpen(!isPriceOpen);
  };

  return (
    <div className={css.parameters__price} onClick={(e) => togglePrice(e)}>
      <h4 className={cn(css.parameters__title, { [css.active]: isPriceOpen })}>Price</h4>
      {isPriceOpen && <div>100$-500$</div>}
    </div>
  );
};

export default Price;
