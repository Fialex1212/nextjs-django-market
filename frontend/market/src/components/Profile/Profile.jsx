"use client";

import Logout from "./Logout/Logout";
import css from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/stores/useAuthStore";

const Profile = () => {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated]);

  return (
    <section className={css.profile}>
      <div className="container">
      <h2 className={css.profile__title}>Profile</h2>
        <div className={css.profile__info}>
          <h3 className={css.profile__username}>{user?.fullname}</h3>
          <h4 className={css.profile__email}>{user?.email}</h4>
        </div>
        <ul className={css.buttons__list}>
          <li className={css.list__item}><Link className={css.list__link} href="/profile/history">History</Link></li>
          <li className={css.list__item}><Link className={css.list__link} href="/cart">Cart</Link></li>
          <li className={css.list__item}><Link className={css.list__link} href="/profile/orders">Orders</Link></li>
          <li className={css.list__item}><Link className={css.list__link} href="/profile/settings">Settings</Link></li>
          <li className={css.list__item}><Logout /></li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
