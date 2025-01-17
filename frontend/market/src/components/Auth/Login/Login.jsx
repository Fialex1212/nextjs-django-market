"use client";

import { useState, useEffect } from "react";
import css from "./style.module.css";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../stores/useAuthStore";

const Login = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await  login(formData);
      router.push("/");
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.")
      console.log(error);
    }
  };

  return (
    <section className={css.login}>
      <div className={cn(css.login__container, "container")}>
        <div className={css.login__wrapper}>
          <h2 className={css.login__title}>Login</h2>
          <form className={css.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={css.form__input}
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <input
                className={css.form__input}
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button className={css.form__button} type="submit">
              LOGIN
            </button>
          </form>
          <p>
            Don't have a account? <Link href="/auth/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
