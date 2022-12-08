import React from "react";
import Image from "next/image";
import css from "./Card.module.css";
import Link from "next/link";

export const Card = ({ title, img, id, tags, description }) => {
  return (
    <div className={css.card}>
      {img &&<div className={css.card__image}> <img src={img} /></div>}
      <div className={css.card__content}>
        <div className={css.card__about}>
          {tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <Link href={`/blog/${id}`} className={css.card__description}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
};
