import Layout from "./layout/component";
import Restaurant from "./restauraunt/component";
import RestaurantTabsContainer from "./restarauntTabsContainer/restarauntTabsContainer";

import { ThemeContextProvider } from "./themeContext";
import { UserContextProvider } from "./userContext";

import { useState} from "react";

import { restaurants } from "./mock";

import './style.css'


function App() {

    const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0])

    return ( 
        <ThemeContextProvider >
        <UserContextProvider >   
            <Layout>
    
            <RestaurantTabsContainer currentRestaurant={currentRestaurant} setCurrentRestaurant={setCurrentRestaurant}/>

            {/* Display current restaraunt */}
            <Restaurant name={currentRestaurant.name} menu={currentRestaurant.menu} reviews={currentRestaurant.reviews}/>
            
            </Layout>
        </UserContextProvider> 
        </ThemeContextProvider>
     );
}

export default App;