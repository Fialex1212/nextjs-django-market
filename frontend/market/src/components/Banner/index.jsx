"use client";

import css from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import banner from "../../app/static/images/banner/mainPhone.jpg";

const Banner = () => {
  return (
    <section className={css.banner}>
      <div className="container">
        <div className={css.banner__wrapper}>
          <div className={css.banner__inner}>
            <h2 className={css.banner__title}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className={css.banner__subtitle}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className={css.banner__button}><Link className={css.banner__link} href={"/shop"}>Shop Now</Link></button>
            <div className={css.banner__stats}>
              <div className={css.banner__stat}>
                <h5 className={css.stat__title}>200+</h5> 
                <p className={css.stat__subtitle}>International Brands</p>
              </div>
              <div className={css.banner__stat}>
                <h5 className={css.stat__title}>2,000+</h5>
                <p className={css.stat__subtitle}>High-Quality Products</p>
              </div>
              <div className={css.banner__stat}>
                <h5 className={css.stat__title}>30,000+</h5>
                <p className={css.stat__subtitle}>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className={css.image__wrapper}>
            <Image
              className={css.banner__image}
              src={banner}
              alt={"banner"}
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
