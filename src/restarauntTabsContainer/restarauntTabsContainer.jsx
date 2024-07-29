import {restaurants} from '../mock'

import styles from './style.module.css'

import Tab from '../tab/component'


function RestaurantTabsContainer({ currentRestaurant, setCurrentRestaurant }) {

    return ( 
        <div className={styles.restarauntTabsContainer}>
            {/* Display selection tabs for each restaraunt */}

            {restaurants.map((restaurant) => {
                return  <Tab 
                callback={()=>{setCurrentRestaurant(restaurant)}} 
                text={restaurant.name} 
                disabled={currentRestaurant.name === restaurant.name}/>
                })}
        </div>
     );
}

export default RestaurantTabsContainer;