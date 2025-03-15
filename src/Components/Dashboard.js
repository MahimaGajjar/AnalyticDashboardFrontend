import React, { useState } from "react";
import styles from "./dashboard.module.css";
import Sidebar from "./Sidebar";
import Userdetails from "./Userdetails";
import NavigationBar from "./NavigationBar";
import {
  faChartBar,
  faMapPin,
  faFile,
  faGear,
  faSquarePollVertical,
  faClipboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overview from "./Overview";
const Dashboard = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: faChartBar,
      component: <Overview />,
    },
    {
      id: "livelocation",
      label: "Live Location",
      icon: faMapPin,
      component: <div className={styles.heading}>Live Location Content</div>,
    },
    {
      id: "timeline",
      label: "Timeline",
      icon: faFile,
      component: <div className={styles.heading}>Timeline Content</div>,
    },
    {
      id: "cardview",
      label: "Card View",
      icon: faGear,
      component: <div className={styles.heading}> Card View Content</div>,
    },
    {
      id: "compliance",
      label: "Compliance Status",
      icon: faSquarePollVertical,
      component: (
        <div className={styles.heading}>Compliance Status Content</div>
      ),
    },
    {
      id: "siteattendence",
      label: "Site Attendance",
      icon: faClipboardUser,
      component: <div className={styles.heading}>Site Attendance Content</div>,
    },
  ];
console.log(tabs);
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.loginSection}>
          <Userdetails />
        </div>
        <div className={styles.navSection}>
          <NavigationBar tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
