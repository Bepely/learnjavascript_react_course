import Counter from "../counter/component";
import { useUser } from "../userContext";

import styles from './style.module.css'



function Menu({menu}) {
    const userValue = useUser()

    return (  
    <div className={styles.menuWrapper}>
        <h3>Меню</h3>
        {menu?.length && (
            <ul >
            {menu.map((element) => {
                return <li className={styles.menuItem} key={element.id}>{element.name} 
                {userValue.value !== null ? <Counter /> : ''}
                </li>
            })}
        </ul>
        )}

    </div>
    );
}

export default Menu;