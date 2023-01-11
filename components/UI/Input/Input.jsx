import React from "react";
import css from "./input.module.css"

export const Input = ({ children, labelTitle, ...props }) => {
  return (
    <label className={css.input}>
      <span>{children}</span>
      <input {...props}/>
    </label>
  );
};
