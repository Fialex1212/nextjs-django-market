"use client";

import useAuth from "@/hooks/useAuth";
import Logout from "./Logout";
import css from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});

  const parseJWT = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    if (token) {
      const parsedInfo = parseJWT(token);
      setUserInfo(parsedInfo);
      console.log(parsedInfo);
    } else{
      router.push("/login");
    }
  }, [token]);

  return (
    <section className={css.profile}>
      <div className="container">
      <h2 className={css.profile__title}>Profile</h2>
        <div className={css.profile__info}>
          <h3 className={css.profile__username}>{userInfo.username}</h3>
          <h4 className={css.profile__email}>{userInfo.email}</h4>
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
