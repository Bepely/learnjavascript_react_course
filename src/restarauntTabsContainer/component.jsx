import { useSelector } from "react-redux";
import styles from './style.module.css';
import Tab from '../tab/component';
import { selectRestarantsIds, selectRestarauntById } from '../redux/entities/restaraunt';

function RestaurantTabsContainer({ currentRestaurant, setCurrentRestaurantId }) {
    // Get restaurant IDs from the Redux store
    const restaurantIds = useSelector(selectRestarantsIds);

    // Map over the restaurant IDs to get the actual restaurant objects
    const restaurants = useSelector((state) =>
        restaurantIds.map((id) => selectRestarauntById(state, id))
    );

    return (
        <div className={styles.restarauntTabsContainer}>
            {/* Display selection tabs for each restaurant */}
            {restaurants.map((restaurant) => (
                <Tab 
                    key={restaurant.id}
                    callback={() => setCurrentRestaurantId(restaurant.id)} 
                    text={restaurant.name} 
                    disabled={currentRestaurant.id === restaurant.id}
                />
            ))}
        </div>
    );
}

export default RestaurantTabsContainer;
