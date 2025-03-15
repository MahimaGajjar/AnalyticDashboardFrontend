import React from 'react'
import styles from './evdata.module.css'
import Sidebar from "./Sidebar";
import Userdetails from "./Userdetails";
import NavigationBar from "./NavigationBar";

const EVdata = () => {
    return (
        <div className={styles.evdataContainer}>
          <Sidebar />
          <div className={styles.mainContent}>
            <div className={styles.loginSection}>
            <Userdetails />
            </div>
            <div className={styles.navSection}>
            <NavigationBar />
            </div>
          </div>
        </div>
      );
}

export default EVdata