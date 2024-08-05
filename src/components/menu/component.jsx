import MenuItem from "../menuItem/component";

import styles from './style.module.css'


function Menu({menuDishesIds}) {

    return (  
    <div className={styles.menuWrapper}>
        <h3>Меню</h3>
        {menuDishesIds?.length && (
            <ul className={styles.listWrapper}>
            {menuDishesIds.map((dishId) => {
                return <li key={dishId} className={styles.menuItem}>
                    <MenuItem dishId={dishId} />
                    </li>
            })}
        </ul>
        )}

    </div>
    );
}

export default Menu;