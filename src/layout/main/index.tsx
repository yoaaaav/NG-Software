import React from "react";

import { Logo } from "../../assets/icons";

import styles from "./layout.module.scss";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className={styles.layout_container}>
      <div className={styles.top_bar}>
        <Logo />
        <h2>moving & delivery</h2>
      </div>
      <h1>Get an estimate</h1>
      <div className={styles.content_container}>{children}</div>
      <div className={styles.bottom} />
    </div>
  );
};
