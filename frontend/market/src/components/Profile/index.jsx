"use client";

import useAuth from "@/hooks/useAuth";
import Logout from "../Logout";
import css from "./style.module.css";
import { useEffect } from "react";
import { useRouter } from 'next/router';

const Profile = () => {
  const { token } = useAuth();

  useEffect(() => { 
    if (!token) {
      console.log(token);
    }
  })

  return (
    <section className={css.profile}>
      <div className="container">
        <h2>Profile</h2>
        <Logout />
      </div>
    </section>
  );
};

export default Profile;
