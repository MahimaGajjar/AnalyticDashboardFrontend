import React, { useState, useEffect } from "react";
import styles from "./navigationbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : "");

  // Debugging logs
  useEffect(() => {
    console.log("Received tabs in NavigationBar:", tabs);
  }, [tabs]);

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.navigationContainer}>
        {tabs.length > 0 ? (
          tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? styles.active : ""}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span
                className={
                  activeTab === tab.id ? styles.showLabel : styles.hideLabel
                }
              >
                {tab.label}
              </span>
            </button>
          ))
        ) : (
          <p>No tabs available</p>
        )}
      </div>

      <div className={styles.tabContent}>
        {tabs.length > 0 && tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default NavigationBar;
