import Counter from "../counter/component"
import { useUser } from "../userContext";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish";

import styles from './style.module.css'



function MenuItem({dishId}) {
    const userValue = useUser()

            // Fetch the dishes based on the menu array
            const dish = useSelector((state) => selectDishById(state, dishId));

    return <li className={styles.menuItem} key={dishId}>{dish.name} 
    {userValue.value !== null ? <Counter /> : ''} </li>
}
                

export default MenuItem;