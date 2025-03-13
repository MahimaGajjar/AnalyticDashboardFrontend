import React from "react";
import styles from "./userdetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons"; 

const Userdetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </div>

      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faBell} className={styles.icon} />
      </div>

      <div className={styles.text}>
        <FontAwesomeIcon
          icon={faUser}
          size="1x"
          style={{ marginRight: "8px" }}
        />
        abc@gmail.com
      </div>
    </div>
  );
};

export default Userdetails;
