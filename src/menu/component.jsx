import MenuItem from "../menuItem/component";

import styles from './style.module.css'

function Menu({menu}) {

    return (  
    <div className={styles.menuWrapper}>
        <h3>Меню</h3>
        {menu?.length && (
            <ul className={styles.listWrapper}>
            {menu.map((element) => {
                return <MenuItem menuItem={element} />
            })}
        </ul>
        )}

    </div>
    );
}

export default Menu;