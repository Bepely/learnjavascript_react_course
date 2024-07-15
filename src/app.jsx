import Layout from "./layout/component";
import Restaurant from "./restauraunt/component";
import Tab from "./tab/component";

import { useState } from "react";

import {restaurants} from './mock'

function App() {

    const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0])

    return ( 
        <div>
            <Layout>
            {/* Display selection tabs for each restaraunt */}
            {restaurants.map((restaurant) => {
              return <>
              <Tab restaurant={restaurant} setCurrentRestaurant={setCurrentRestaurant}/>
              </>  
            })}

            {/* Display current restaraunt */}
            <Restaurant name={currentRestaurant.name} menu={currentRestaurant.menu} reviews={currentRestaurant.reviews}/>

            </Layout>
        </div>
     );
}

export default App;