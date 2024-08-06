import styles from "./style.module.css"
import classnames from "classnames";
import { useTheme } from "../themeContext";

import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunt";

function Tab({restaurantId, currentRestaurantId, callback}) {

    const themeValue = useTheme()

    const restaurant = useSelector((state) =>{
        return selectRestarauntById(state, restaurantId)
    }
    );
    
    return ( 
    <button disabled={restaurant.id === currentRestaurantId} onClick={callback}
        className={classnames(styles.button, {
            [styles.light]: themeValue.value === 'light',
            [styles.dark]: themeValue.value === 'dark'
        })}
    >
        {restaurant.name}
    </button> );
}

export default Tab;