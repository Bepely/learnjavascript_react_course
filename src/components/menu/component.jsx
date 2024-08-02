import MenuItem from "../menuItem/component";

import styles from './style.module.css'


function Menu({menuDishesIds}) {

    return (  
    <div className={styles.menuWrapper}>
        <h3>Меню</h3>
        {menuDishesIds?.length && (
            <ul className={styles.listWrapper}>
            {menuDishesIds.map((dishId) => {
                return <MenuItem dishId={dishId} />
            })}
        </ul>
        )}

    </div>
    );
}

export default Menu;