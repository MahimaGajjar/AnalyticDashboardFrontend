import React from "react";
import styles from "./userdetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Userdetails = () => {
  //   const [user, setUser] = useState("");

  return (
    <div className={styles.container}>
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
