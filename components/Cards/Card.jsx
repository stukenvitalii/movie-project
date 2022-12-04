import React from "react";
import Image from "next/image";
import css from "./Card.module.css";
import Link from "next/link";

export const Card = ({ title, img, date, author, description,id }) => {
  return (
    <div className={css.card}>
      <div className={css.card__image}>
        <img fill src={img} />
      </div>
      <div className={css.card__content}>
        <div className={css.card__about}>
          <span>{author}</span>
          <span>Year of release: {date}</span>
        </div>
        <Link href={`/blog/${id}`} className={css.card__description}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
};
