import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarDays,
  faAddressCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const menuItems = [
  { icon: faAddressCard, label: "Dashboard", path: "/" },
  { icon: faCalendarDays, label: "EV Data", path: "/evdata" },
  { icon: faUser, label: "Organizations", path: "/organizations" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const handleNavigation = (index, path) => {
    if (menuItems[index].label === "Organizations") return;

    if (selected !== index) {
      setSelected(index);
      navigate(path);
    }
  };

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
             className={`${selected === index ? styles.activeItem : ""} 
                         ${item.label === "Organizations" ? styles.disabledItem : ""}`}
             onClick={() => handleNavigation(index, item.path)}
           >
             <FontAwesomeIcon icon={item.icon} className={styles.menuIcon} />
             {item.label}
           </li>
            ))}
          </ul>

          <div
            className={styles.sidebarFooter}
            onClick={() => alert("Logging out...")}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className={styles.menuIcon} />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
