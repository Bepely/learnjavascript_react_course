import styles from "./style.module.css";
import classnames from "classnames";

import { useTheme } from "../themeContext";
import { useUser } from "../userContext";

import { NavLink } from "react-router-dom";

import UserButton from "../userButton/component";

function Header() {
  const themeValue = useTheme();
  const userValue = useUser();

  return (
    <div
      className={classnames(styles.header, {
        [styles.light]: themeValue.value === "light",
        [styles.dark]: themeValue.value === "dark",
      })}
    >
      <h1>
        <NavLink to="/">Доставка еды</NavLink>
      </h1>

      <div className={styles.loginWrapper}>
        <span>{userValue.value !== null ? userValue.value : ""} </span>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
