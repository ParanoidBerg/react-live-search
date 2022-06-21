import React from "react";
import styles from "./main.module.css";

const Main = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgCnt}>
        <img className={styles.img} alt={props.name} src={props.img} />
      </div>
      <div className={styles.titleInfo}>
        <div className={styles.title}>
          <div className={styles.text}>{props.name}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
        <div className={styles.btnCnt}>
          <button className={styles.more}>Детали</button>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cumque
        non quibusdam
      </div>
      <div className={styles.cartCnt}>
        <button className={styles.addBtn}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default Main;
