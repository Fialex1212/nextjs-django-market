"use client"

import useAuth from "@/hooks/useAuth";
import css from "./style.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, {Toaster} from "react-hot-toast";

const Logout = () => {
  const router = useRouter();
  const { token, clearToken } = useAuth();

  const logout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('jwt-token')
      toast.success("You are successfully logged out!!!");
      setTimeout(() => {
        router.push("/login"); 
      }, 1000);
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      <button className={css.logout__button} onClick={logout}>Logout button</button>
    </div>
  );
};

export default Logout;
