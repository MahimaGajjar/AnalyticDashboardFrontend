import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSignOutAlt, // Logout icon
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faAddressCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const menuItems = [
  { icon: faAddressCard, label: "Dashboard" },
  { icon: faCalendarDays, label: "EV Data" },
  { icon: faUser, label: "Organizations" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <>
      {!isOpen && (
        <FontAwesomeIcon
          icon={faBars}
          className={styles.hamburgerIcon}
          onClick={() => setIsOpen(true)}
        />
      )}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarHeader}>
            <img src="/logo.png" alt="logo" />
            {isOpen && (
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={() => setIsOpen(false)}
              />
            )}
          </div>

          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={selected === index ? styles.activeItem : ""}
                onClick={() => setSelected(index)}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.menuIcon} />
                {item.label}
              </li>
            ))}
          </ul>

          <div className={styles.sidebarFooter} onClick={() => alert("Logging out...")}>
            <FontAwesomeIcon icon={faSignOutAlt} className={styles.menuIcon} />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
