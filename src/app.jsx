import Layout from "./layout/component";
import Restaurant from "./restauraunt/component";
import RestaurantTabsContainer from "./restarauntTabsContainer/restarauntTabsContainer";

import { ThemeContextProvider } from "./themeContext";
import { UserContextProvider } from "./userContext";

import { useState} from "react";

import { restaurants } from "./mock";

import './style.css'
import { useCallback } from "react";



function App() {

    const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0])
    const [theme, setTheme] = useState('light')
    const [user, setUser] = useState(null);

    const toggleTheme = useCallback(()=>{setTheme((current)=> current==='light'?'dark':'light')}, [])
    const toggleUser = useCallback(()=>{setUser((current) => current===null ? 'USERNAME' : null)})

    return ( 
        <ThemeContextProvider value={{value: theme, toggleTheme}}>
        <UserContextProvider value={{value: user, toggleUser}}>   
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