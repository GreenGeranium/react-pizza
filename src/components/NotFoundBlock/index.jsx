import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <>
      <h1 className={styles.root}>
        Sorry(
        <br></br>
        <p>Ничего не найдено</p>
      </h1>
      <p className={styles.description}>
        К сожалению, данной страницы нет на нашем интернет-магазине
      </p>
    </>
  );
}

export default NotFoundBlock;
