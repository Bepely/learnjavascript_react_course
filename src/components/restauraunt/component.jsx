import Tab from "../tab/component";
import styles from "./style.module.css";

import { useSelector } from "react-redux";
import { selectRestarauntById } from "../../redux/entities/restaraunt";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Restaurant() {
  const { restaurantId } = useParams();
  const currentRestaurant = useSelector((state) =>
    selectRestarauntById(state, restaurantId)
  );

  return (
    <div className={styles.restarauntWrapper}>
      <h1>{currentRestaurant.name}</h1>
      <div className={styles.tabsWrapper}>
        <Tab targetId="menu" text="Меню" />
        <Tab targetId="review" text="Отзывы" />
      </div>
      <Outlet />
    </div>
  );
}

export default Restaurant;
