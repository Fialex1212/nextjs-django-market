import { useState } from "react";
import css from "./style.module.css";

const EmailSender = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
    });
  };

  return (
    <section className={css.email}>
      <div className="container">
        <div className={css.email__sender}>
          <h2 className={css.email__title}>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form className={css.email__form} onSubmit={handleSubmit}>
            <label className={css.input__inner}>
              <input
                className={css.email__input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
              />
            </label>
            <button className={css.email__button} type="submit">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSender;
