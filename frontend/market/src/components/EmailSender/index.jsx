import { useState } from "react";
import css from "./style.module.css";
import axios from "axios";
import toaster from "react-hot-toast";

const EmailSender = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/email/subscribe-to-newsletter/",
        formData
      );
      toaster.success(response.data.message || "Subscribed successfully!");
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toaster.error(error.response?.data?.message || "An error occurred!");
    }
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
