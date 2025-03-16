import React from "react";
import styles from "./card.module.css";

const Card = ({ text }) => {
  return (
    <div className={styles.card}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
