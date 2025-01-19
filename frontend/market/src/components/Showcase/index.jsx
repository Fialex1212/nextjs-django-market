import css from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

import { goodsData } from "./utils";
import Slider from "../Slider";

const Showcase = ({ title, isButton }) => {
  return (
    <section className={css.showcase}>
      <div className={css.showcase__container}>
        <h2 className={css.showcase__title}>{title}</h2>
        <Slider
          data={goodsData}
          breakpoints={{
            319: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        />
        {isButton && (
          <button className={css.showcase__button}>
            <Link className={css.showcase__link} href="/shop">
              View All
            </Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default Showcase;
