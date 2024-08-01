import Layout from "./layout/component";

import { ThemeContextProvider } from "./themeContext";
import { UserContextProvider } from "./userContext";

import './style.css'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RestaurantWrapper from "./restarauntWrapper/component";


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