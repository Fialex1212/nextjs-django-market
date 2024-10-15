import css from "./style.module.css";
import cn from "classnames";
import Image from "next/image";

import { brandsData } from "./utils";

const Brands = () => {
  return (
    <section className={css.brands}>
      <div className="container">
        <ul className={css.brands__list}>
          {brandsData.map(({image, alt}, index) => (
            <li className={css.brand__item} key={index}>
              <Image src={image} alt={alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
