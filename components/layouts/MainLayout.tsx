import { FC, PropsWithChildren, ReactNode } from 'react';

import Head from "next/head";

import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

const MainLayout: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Emiliano</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
