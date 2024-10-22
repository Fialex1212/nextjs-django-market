"use client";

import { useState } from "react";
import css from "./style.module.css";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const { token } = useAuth();
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
      toast.success("Welcome email sent successfully!");
    } catch (error) {
      toast.error("Failed to send welcome email.");
      console.log("Email send error: ", error.response.data); // Log specific error response
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == repeatPassword) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/users/register/",
          {
            email,
            password,
          }
        );
        console.log({
          email,
          password,
        });
        console.log(response.data);
        router.push("/login");
        toast.success("Register successfully!!!");
        sendWellcomeEmail();
      } catch (error) {
        toast.error("Something went wrong...");
        console.log(error);
      }
    } else {
      toast.error("Passwords don't match!");
    }
  };

  return (
    <section className={css.login}>
      <Toaster />
      <div className={cn(css.login__container, "container")}>
        <div className={css.login__wrapper}>
          <h2 className={css.login__title}>Sign up</h2>
          <form className={css.form} onSubmit={handleSubmit}>
            <label>
              <input
                className={css.form__input}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </label>
            <button className={css.form__button} type="submit">
              LOGIN
            </button>
          </form>
          <p>
            Already have a account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
