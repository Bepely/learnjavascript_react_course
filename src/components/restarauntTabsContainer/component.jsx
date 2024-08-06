import { useSelector } from "react-redux";
import styles from "./style.module.css";
import Tab from "../tab/component";
import {
  selectRestarantsIds,
  selectRestarauntById,
} from "../../redux/entities/restaraunt";
import { Outlet } from "react-router-dom";

function RestaurantTabsContainer() {
  const restaurantIds = useSelector(selectRestarantsIds);

  const restaurants = restaurantIds.map((id) =>
    useSelector((state) => selectRestarauntById(state, id))
  );

  return (
    <>
      <div className={styles.restarauntTabsContainer}>
        {restaurants.map((restaurant) => (
          <Tab
            key={restaurant.id}
            targetId={restaurant.id}
            text={restaurant.name}
          />
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default RestaurantTabsContainer;
