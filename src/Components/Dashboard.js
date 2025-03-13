import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "./Sidebar";
import Userdetails from "./Userdetails";
import NavigationBar from "./NavigationBar";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
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
};

export default Dashboard;
