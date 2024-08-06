import { useSelector } from "react-redux";
import RestaurantTabsContainer from "../restarauntTabsContainer/component";
import Restaurant from "../restauraunt/component";
import { useState, useEffect } from "react";
import { selectRestarantsIds, selectRestarauntById } from "../../redux/entities/restaraunt";

function RestaurantWrapper() {
    const restaurants = useSelector(selectRestarantsIds);

    // Set the initial state to the first restaurant's ID
    const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurants[0]);


    // Update the currentRestaurantId when restaurants array changes (e.g., after data is loaded)
    useEffect(() => {
        if (restaurants.length > 0) {
            setCurrentRestaurantId(restaurants[0]);
        }
    }, [restaurants]);

    return (
        <>
            <RestaurantTabsContainer currentRestaurantId={currentRestaurantId} setCurrentRestaurantId={setCurrentRestaurantId} />
            <Restaurant currentRestaurantId={currentRestaurantId} />
        </>
    );
}

export default RestaurantWrapper;
