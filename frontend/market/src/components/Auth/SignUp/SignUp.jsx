"use client";

import { useEffect, useState } from "react";
import css from "./style.module.css";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";
import Popup from "./Popup/Popup";

const SignUp = () => {
  const router = useRouter();
  const { register, isAuthenticated, codeSubmit } = useAuthStore();
  const [code, setCode] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const sendWellcomeEmail = async () => {
    const emailPayload = {
      recipient: email,
      subject: "Welcome to your online shop of clothes",
      message:
        "Welcome to your online shop of clothes, take this code for -20% discount",
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/email/send-email/",
        emailPayload
      );
    } catch (error) {
      console.log("Email send error: ", error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == repeatPassword) {
      const userData = {
        fullname: fullname,
        email: email,
        password: password,
      };
      try {
        await register(userData);
        toast.success("Verify your email");
      } catch (error) {
        toast.error("Something went wrong...");
        console.log(error);
      }
    } else {
      toast.error("Passwords don't match!");
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const userData = {
      code: code,
      email: email,
      fullname: fullname,
      password: password,
    };
    console.log(userData);
    try {
      await codeSubmit(userData);
      toast.success("Email verified. User created successfully.");
      sendWellcomeEmail();
      router.push("/auth/login");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated])

  return (
    <section className={css.login}>
      <div className={cn(css.login__container, "container")}>
        <div className={css.login__wrapper}>
          <h2 className={css.login__title}>Sign up</h2>
          <form className={css.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={css.form__input}
                type="text"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                className={css.form__input}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                className={css.form__input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />
            </label>
            <label>
              <input
                className={css.form__input}
                type="password"
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                name="password2"
                required
              />
            </label>
            <button className={css.form__button} type="submit">
              LOGIN
            </button>
          </form>
          <p>
            Already have a account? <Link href="/auth/login">Login</Link>
          </p>
        </div>
      </div>
      <Popup>
        <div>
          <form className={css.code__form} onSubmit={handleCodeSubmit}>
            <h3 className={css.code__title}>Verify your email</h3>
            <label>
              <input
                className={css.form__input}
                type="text"
                placeholder="Enter your code"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </label>
            <button className={css.form__button} type="submit">
              Verify email
            </button>
          </form>
        </div>
      </Popup>
    </section>
  );
};

export default SignUp;
