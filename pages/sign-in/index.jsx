import Link from "next/link";
import React from "react";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import css from "./signin.module.css";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function FormHandler(e) {
    e.preventDefault();
    fetch("https://norma.nomoreparties.space/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(res=>  {
        if (res.ok) return e.json();
        // throw Error();
      })
  }

  return (
    <form className={css.form} onSubmit={FormHandler}>
      <fieldset className={css.form__inputs} >
        <legend>Войдите в аккаунт</legend>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Почта"
          required
          value={email}
        >
          Почта
        </Input>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Пароль"
          required
          value={password}
        >
          Пароль
        </Input>
      </fieldset>
      <Link href="/register">Зарегистрироваться</Link>
      <Button type="submit">Войти</Button>
    </form>
  );
};
export default SignIn;
