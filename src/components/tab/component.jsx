import styles from "./style.module.css";
import classnames from "classnames";
import { useTheme } from "../themeContext";

import { NavLink } from "react-router-dom";

function Tab({ targetId, text }) {
  const themeValue = useTheme();

  return (
    <NavLink
      to={targetId}
      className={({ isActive }) =>
        classnames(styles.button, {
          [styles.active]: isActive,
          [styles.light]: themeValue.value === "light",
          [styles.dark]: themeValue.value === "dark",
        })
      }
    >
      {text}
    </NavLink>
  );
}

export default Tab;
