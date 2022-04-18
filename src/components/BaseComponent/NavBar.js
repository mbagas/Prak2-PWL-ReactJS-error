import React from "react";
import { createUseStyles } from "react-jss";
import { COLOR_THEME } from "../../utils/theme";

export const NavBar = () => {
  const styles = style();
  return (
    <ul className={styles.navBar}>
      <li>
        <a href="#home" className={styles.navChild}>
          Home
        </a>
      </li>
      <li>
        <a href="#news" className={styles.navChild}>
          News
        </a>
      </li>
      <li>
        <a href="#contact" className={styles.navChild}>
          Contact
        </a>
      </li>
      <li>
        <a href="#about" className={styles.navChild}>
          About
        </a>
      </li>
    </ul>
  );
};

const style = createUseStyles({
  navBar: {
    display: "block",
    listStyle: "none",
    margin: 0,
    padding: 0,
    backgroundColor: COLOR_THEME.primary,
    width: "100%",
    overflow: "hidden",
    top: 0,
  },
  navChild: {
    display: "block",
    padding: "10px",
    float: "right",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // float: "right",
  },
});

export default NavBar;
