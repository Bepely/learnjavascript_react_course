import styles from "./style.module.css";
import classnames from "classnames";

import { useTheme } from "../themeContext";

import { NavLink } from "react-router-dom";

import LoginWrapper from "../loginWrapper/component";

function Header() {
  const themeValue = useTheme();

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

      <LoginWrapper />
    </div>
  );
}

export default Header;
