"use client";

import { useEffect, useState } from "react";
import css from "./style.module.css";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const { token, updateToken } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login/",
        formData
      );
      console.log(response.data.access);
      updateToken(response.data.access);
      toast.success("Login successfully!!!");
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong...");
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  return (
    <section className={css.login}>
      <Toaster />
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
            Don't have a account? <Link href="/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
