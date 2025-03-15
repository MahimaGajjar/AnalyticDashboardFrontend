import React from "react";
import styles from "./evdata.module.css";
import Sidebar from "./Sidebar";
import Userdetails from "./Userdetails";
import NavigationBar from "./NavigationBar";
import Datatable from "./Datatable";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EVdata = () => {
  const tabs = [
    {
      id: "dataTable",
      label: "Data Table",
      icon: faChartBar,
      component: <Datatable />,
    },
  ];
  return (
    <div className={styles.evdataContainer}>
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

export default EVdata;
