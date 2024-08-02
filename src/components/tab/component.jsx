import styles from "./style.module.css"
import classnames from "classnames";
import { useTheme } from "../themeContext";

function Tab({text, callback, disabled}) {

    const themeValue = useTheme()
    
    return ( 
    <button disabled={disabled} onClick={callback}
        className={classnames(styles.button, {
            [styles.light]: themeValue.value === 'light',
            [styles.dark]: themeValue.value === 'dark'
        })}
    >
        {text}
    </button> );
}

export default Tab;