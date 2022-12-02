import React from "react";
import Image from "next/image";
import css from "./Card.module.css";

export const Card = ({ title,img, date, author, description }) => {
  return (
    <div className={css.card}>
      <div className={css.card__image}>
        <Image fill src={img}/>
      </div>
      <div className={css.card__content}>
        <div className={css.card__about}>
            <span>{author}</span>
            <span>{date}</span>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
