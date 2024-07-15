function Tab({restaurant, setCurrentRestaurant}) {

    // Create a callback fucntion for a button click
    const changeCurrentRestaurant = function(){
        // Update currentRestaraunt state
        setCurrentRestaurant(restaurant)
    }

    return ( 
    <button onClick={changeCurrentRestaurant}>
        {restaurant.name}
    </button> );
}

export default Tab;