import React from "react";
import styles from "./dashboard.module.css";
import Sidebar from "./Sidebar";
import Userdetails from "./Userdetails";
import NavigationBar from "./NavigationBar";
import CardView from "./CardView";
import {
  faChartBar,
  faMapPin,
  faFile,
  faGear,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import Overview from "./Overview";
import Card from "./Card"; 

const Dashboard = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: faChartBar,
      component: <Overview />,
    },
    {
      id: "cardview",
      label: "Card View",
      icon: faGear,
      component: <CardView />,
    },
    {
      id: "livelocation",
      label: "Live Location",
      icon: faMapPin,
      component: (
        <div className={styles.centeredContent}>
          <div className={styles.heading}>Live Location Content</div>
          <Card text="Tracking real-time locations with accuracy." />
        </div>
      ),
    },
    {
      id: "timeline",
      label: "Timeline",
      icon: faFile,
      component: (
        <div className={styles.centeredContent}>
          <div className={styles.heading}>Timeline Content</div>
          <Card text="View all historical events and activities." />
        </div>
      ),
    },
    {
      id: "compliance",
      label: "Status",
      icon: faSquarePollVertical,
      component: (
        <div className={styles.centeredContent}>
          <div className={styles.heading}>Status</div>
          <Card text="Current system compliance and health status." />
        </div>
      ),
    },
  ];

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
