import css from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/static/icons/header/logo.svg";
import cn from "classnames";

import { footerData, paymentData, socialData } from "./utils";

const Footer = () => {
  const paymentImages = {};
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__inner}>
          <div className={css.footer__social}>
            <Link href="/">
              <Image className={css.social__logo} src={logo} alt="logo" />
            </Link>
            <p className={css.social__text}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className={css.social__list}>
              {socialData.map(({ image, url }, index) => (
                <li className={css.social__item} key={index}>
                  <Link href={url}>
                    {image}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.footer__links}>
            <ul className={css.list__list}>
              {footerData.map((item, index) => (
                <li key={index}>
                  <h3 className={css.links__title}>{item.title}</h3>
                  <ul className={css.links__list}>
                    {item.links.map(({ name, slug }, index) => (
                      <li className={css.links__item} key={index}>
                        <Link className={css.links__link} href={slug}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={css.footer__rights}>
          <div className={css.footer__line}></div>
          <div className={css.rights__inner}>
            <p className={css.rights__text}>
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <ul className={css.rights__list}>
              {paymentData.map(({ image, alt }, index) => (
                <li className={css.rights__item} key={index}>
                  <Image className={css.rights__image} src={image} alt={alt} width={46} height={30} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
