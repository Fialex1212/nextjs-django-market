import css from "./style.module.css";
import Image from "next/image";
import cn from "classnames";
import delete_icon from "@/app/static/icons/cart/delete.svg";
import plus from "@/app/static/icons/cart/plus.svg";
import minus from "@/app/static/icons/cart/minus.svg";

import { productsData } from "./utils";

const Cart = () => {
  return (
    <section className={css.cart}>
      <div className="container">
        <div className={css.cart__wrapper}>
          <h3 className={css.cart__title}>Your Cart</h3>
          <div className={css.cart__inner}>
            <ul className={css.cart__list}>
              {productsData.map(
                ({ image, title, size, color, price }, index) => (
                  <li className={css.cart__item} key={index}>
                    <div className={css.item__wrapper}>
                      <Image className={css.item__image} src={image} alt={title} width={124} height={124} />
                      <div className={css.item__inner}>
                        <div className={css.item__info}>
                          <h4 className={css.item__title}>{title}</h4>
                          <div className={css.item__params}>
                            <p>Size:</p>
                            <p>{size}</p>
                          </div>
                          <div className={css.item__params}>
                            <p>Color:</p>
                            <p>{color}</p>
                          </div>
                          <p className={css.item__price}>${price}</p>
                        </div>
                        <div className={css.item__buttons}>
                          <button className={css.delete__button}>
                            <Image src={delete_icon} alt="delete icon" />
                          </button>
                          <div className={css.item__counter}>
                            <button className={css.counter__button}>
                              <Image src={minus} alt="minus button" />
                            </button>
                            <p>1</p>
                            <button className={css.counter__button}>
                              <Image className={css.counter__button__img} src={plus} alt="plus button" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
            <div className={css.cart__summary}>
              <h4 className={css.summary__title}>Order Summary</h4>
              <ul className={css.summary__info__list}>
                <li className={css.info__item}>
                  <p>Subtotal</p>
                  <p className={css.info__price}>$565</p>
                </li>
                <li className={css.info__item}>
                  <p>Discount(-20%)</p>
                  <p className={cn(css.info__price, css.info__price__accent)}>
                    -$113
                  </p>
                </li>
                <li className={css.info__item}>
                  <p>Delivery Fee</p>
                  <p className={css.info__price}>$15</p>
                </li>
              </ul>
              <div className={css.summary__price}>
                <p className={css.price__title}>Total</p>
                <p className={css.price__total}>$467</p>
              </div>
              <form className={css.cart__form}>
                <label className={css.cart__label}>
                  <input
                    className={css.cart__input}
                    type="text"
                    placeholder="Order Summary"
                  />
                </label>
                <button className={css.form__button}>Apply</button>
              </form>
              <button className={css.summary__button}>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
