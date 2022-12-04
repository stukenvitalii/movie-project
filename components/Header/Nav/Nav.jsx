import React from "react";
import css from "./Nav.module.css";
import { ButtonLink } from "../../UI/ButtonLink/ButtonLink.jsx";
export const Nav = () => {
  return (
    <nav className={css.nav}>
      <h1 className={css.nav__logo}>Movie'm</h1>
      <ul className={css.nav__list}>
        <li>
          <ButtonLink href="/profile">Profile</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/login">Sign in</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/contacts">Contacts</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/about">About</ButtonLink>
        </li>
      </ul>
    </nav>
  );
};
