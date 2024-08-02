import Layout from "./components/layout/component"

import { ThemeContextProvider } from "./components/themeContext";
import { UserContextProvider } from "./components/userContext";

import './style.css'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RestaurantWrapper from "./components/restarauntWrapper/component";


function App() {



    return ( 
        <Provider store={store}>
            <ThemeContextProvider >
            <UserContextProvider >   
                <Layout>
        
                <RestaurantWrapper />
                
                </Layout>
            </UserContextProvider> 
            </ThemeContextProvider>
        </Provider>
     );
}

export default App;