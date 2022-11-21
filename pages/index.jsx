import React from 'react'
import { Layout } from '../components/Layout/Layout';
import { Nav } from '../components/Nav/Nav';
import css from "./index.module.css";

const IndexPage  = () => {
  return (
    <Layout title="Главная страница">
        <header>
            <Nav/>
        </header>
        <main className={css.main}>
        <h1 className={css.main__logo}>My blog</h1>
        </main>
    </Layout>
  )
}

export default IndexPage;