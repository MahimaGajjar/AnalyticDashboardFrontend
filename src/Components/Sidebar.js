import React from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faCalendarDays,
  faAddressCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const menuItems = [
  { icon: faAddressCard, label: "Dashboard" },
  { icon: faCalendarDays, label: "EV Data" },
//   { icon: faCalendarDays, label: "Leaves" },
  { icon: faUser, label: "Organizations" },
];
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarHeader}>
          <img src="/logo.png" alt="logo" />
        </div>

        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  marginRight: "8px",
                  paddingLeft: "8px",
                  paddingTop: "3px",
                }}
              />
              {item.label}
            </li>
          ))}
        </ul>
        {/* <div className={styles.sidebarFooter}>Footer</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
