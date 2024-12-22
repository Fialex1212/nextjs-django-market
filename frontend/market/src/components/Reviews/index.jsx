import SliderReviews from "../SliderReviews";
import css from "./style.module.css";

const Reviews = () => {
  return (
    <section className={css.reviews}>
      <div className="container">
        <h2 className={css.reviews__title}>OUR HAPPY CUSTOMERS</h2>
        <SliderReviews
          breakpoints={{
            319: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        />
      </div>
    </section>
  );
};

export default Reviews;
