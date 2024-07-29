import Counter from "../counter/component";
import { useUser } from "../userContext";

import styles from './style.module.css'



function MenuItem({menuItem}) {
    const userValue = useUser()

    return <li className={styles.menuItem} key={menuItem.id}>{menuItem.name} 
    {userValue.value !== null ? <Counter /> : ''} </li>
}
                

export default MenuItem;