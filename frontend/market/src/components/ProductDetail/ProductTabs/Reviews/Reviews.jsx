import React from "react";
import css from "./styles.module.css";
import { Rating } from "@smastrom/react-rating";

const Reviews = ({ product }) => {
  const formatDate = (date) => {
    const formatedDate = new Date(date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return formatedDate.toLocaleDateString("en-US", options);
  };

  return (
    <ul className={css.review__list}>
      {product?.reviews?.length > 0 ? (
        product.reviews.map((review, index) => (
          <li className={css.review__item} key={index}>
            <Rating
              className={css.item__rating}
              value={review.rating}
              readOnly
              style={{ maxWidth: 110 }}
            />
            <p className={css.item__user}>{review.user}</p>
            <p className={css.item__text}>{review.text}</p>
            <p className={css.item__created__at}>
              {formatDate(review.created_at)}
            </p>
          </li>
        ))
      ) : (
        <li>No reviews yet.</li>
      )}
    </ul>
  );
};

export default Reviews;
