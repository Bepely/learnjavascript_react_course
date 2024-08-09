import Layout from "./components/layout/component";

import { ThemeContextProvider } from "./components/themeContext";
import { UserContextProvider } from "./components/userContext";

import "./style.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Restaurant from "./components/restauraunt/component";
import RestaurantTabsContainer from "./components/restarauntTabsContainer/component";
import HomePage from "./components/homePage/component";
import Menu from "./components/menu/component";
import Review from "./components/review/component";
import DishDetails from "./components/dishDetails/component";

import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/restaraunts",
        element: <RestaurantTabsContainer />,
        children: [
          {
            path: ":restaurantId",
            element: <Restaurant />,
            children: [
              {
                index: true,
                element: <Navigate to="menu" />,
              },
              {
                path: "menu",
                element: <Menu />,
              },
              {
                path: "review",
                element: <Review />,
              },
            ],
          },
        ],
      },
      {
        path: "/dish/:dishId",
        element: <DishDetails />,
      },
    ],
    errorElement: <div>Not Found</div>,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
