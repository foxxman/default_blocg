import React from "react";
import styles from "../../../scss/Header.module.scss";
import SearchOutlineIcon from "../../../assets/icons/SearchOutlineIcon";

const HeaderSearch = () => {
  return (
    <div className={styles.HeaderSearch}>
      <input type="text" placeholder="Search..." />
      <SearchOutlineIcon />
    </div>
  );
};

export default HeaderSearch;
