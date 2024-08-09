import MenuItem from "../menuItem/component";

import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunt";

function Menu() {
  const { restaurantId } = useParams();
  const currentRestaurant = useSelector((state) =>
    selectRestarauntById(state, restaurantId)
  );

  return (
    <div className={styles.menuWrapper}>
      <h3>Меню</h3>
      {currentRestaurant.menu?.length && (
        <ul className={styles.listWrapper}>
          {currentRestaurant.menu.map((dishId) => {
            return (
              <li key={dishId} className={styles.menuItem}>
                <MenuItem dishId={dishId} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Menu;
