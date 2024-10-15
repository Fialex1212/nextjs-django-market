import css from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

const Catalog = ({ data }) => {
  return (
    <section className={css.catalog}>
      <div className="container">
        <div className={css.catalog__wrapper}>
          <h2 className={css.catalog__title}>BROWSE BY dress STYLE</h2>
          <ul className={css.catalog__list}>
            {data.map(({ title, img, slug }, index) => (
              <li className={css.catalog__item} key={index}>
                <Link className={css.item__link} href={slug}>
                  <h3 className={css.item__title}>{title}</h3>
                  <Image className={css.item__img} src={img} alt={title} width={407} height={289} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
