import styles from "./style.module.css";
import classnames from "classnames";
import { useTheme } from "../themeContext";

function Button({ text, callback }) {
  const themeValue = useTheme();
  return (
    <button
      onClick={callback}
      className={classnames(styles.button, {
        [styles.light]: themeValue.value === "light",
        [styles.dark]: themeValue.value === "dark",
      })}
    >
      {text}
    </button>
  );
}

export default Button;
