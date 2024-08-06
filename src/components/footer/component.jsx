import styles from './style.module.css'
import classnames from "classnames";

import { useTheme } from '../themeContext';

import ThemeButton from '../themeButton/component';


function Footer() {
    const themeValue = useTheme()

    return ( 
        <div className={classnames(styles.footer, {
            [styles.light]: themeValue.value === 'light',
            [styles.dark]: themeValue.value === 'dark'
        })}>Footer
                    <ThemeButton /></div>
     );
}

export default Footer;