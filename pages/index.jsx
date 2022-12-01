import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Nav } from "../components/Header/Nav/Nav";
import css from "./index.module.css";
import {Button} from "../components/UI/Button/Button";

const IndexPage = () => {
  return (
    <Layout title="Главная страница">
      <header>
        <Nav />
      </header>
      <main className={css.main}>
        <div className={css.main__title}>
          <h1 className={css.main__logo}>My first blog</h1>
          <Button>Let's read</Button>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
