import { useSelector } from "react-redux";
import styles from './style.module.css';
import Tab from '../tab/component';
import { selectRestarantsIds, selectRestarauntById } from '../../redux/entities/restaraunt';

function RestaurantTabsContainer({ currentRestaurantId, setCurrentRestaurantId }) {
    // Get restaurant IDs from the Redux store
    const restaurantIds = useSelector(selectRestarantsIds);


    return (
        <div className={styles.restarauntTabsContainer}>
            {/* Display selection tabs for each restaurant */}
            {restaurantIds.map((restaurantId) => (
                <Tab 
                    key={`restaurant-tab-${restaurantId}`}
                    restaurantId={restaurantId}
                    currentRestaurantId={currentRestaurantId}
                    callback={() => setCurrentRestaurantId(restaurantId)} 
                />
            ))}
        </div>
    );
}

export default RestaurantTabsContainer;
