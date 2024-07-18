import Layout from "./layout/component";
import Restaurant from "./restauraunt/component";
import Tab from "./tab/component";

import { useState } from "react";

import {restaurants} from './mock'

import './style.css'

function App() {

    const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0])

    return ( 
        <div>
            <Layout>
            {/* Display selection tabs for each restaraunt */}
            {restaurants.map((restaurant) => {
              return  <Tab 
              callback={()=>{setCurrentRestaurant(restaurant)}} 
              text={restaurant.name} 
              disabled={currentRestaurant.name === restaurant.name}/>
            })}

            {/* Display current restaraunt */}
            <Restaurant name={currentRestaurant.name} menu={currentRestaurant.menu} reviews={currentRestaurant.reviews}/>
            <Restaurant name={currentRestaurant.name} menu={currentRestaurant.menu} reviews={currentRestaurant.reviews}/>
            <Restaurant name={currentRestaurant.name} menu={currentRestaurant.menu} reviews={currentRestaurant.reviews}/>
            <Restaurant name={currentRestaurant.name} menu={currentRestaurant.menu} reviews={currentRestaurant.reviews}/>

            </Layout>
        </div>
     );
}

export default App;