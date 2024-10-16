"use client"

import { useState } from 'react'
import css from './style.module.css'
import Link from 'next/link'
import cn from 'classnames'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  return (
    <section className={css.login}>
      <div className={cn(css.login__container, "container")}>
        <div className={css.login__wrapper}>
          <h2 className={css.login__title}>Login</h2>
          <form className={css.form}>
            <label>
              <input className={css.form__input} type="text" placeholder="Email" />
            </label>
            <label>
              <input className={css.form__input} type="password" placeholder="Password" />
            </label>
            <button className={css.form__button} type='submit' >LOGIN</button>
          </form>
          <p>Don't have a account? <Link href="/sign-up">Sign up</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Login
