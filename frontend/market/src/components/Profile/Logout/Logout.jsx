"use client"

import css from "./style.module.css";
import { useRouter } from "next/navigation";
import toast, {Toaster} from "react-hot-toast";
import { useAuthStore } from "@/stores/useAuthStore";

const Logout = () => {
  const router = useRouter();
  const {logout} = useAuthStore();

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      logout()
      toast.success("You are successfully logged out!!!");
      router.push("/auth/login"); 
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      <button className={css.logout__button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
