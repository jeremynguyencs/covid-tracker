import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.text}>
        <span role="img" aria-label="mask_icon">
          😷
        </span>
        COVID-19 Tracker
      </h1>
    </div>
  );
};

export default Navbar;