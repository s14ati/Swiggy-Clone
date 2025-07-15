import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./pages/Search.jsx";
import App from "./App.jsx";
import Help from "./pages/Help.jsx";
import Offers from "./pages/Offers.jsx";
import Swiggycorporate from "./pages/Swiggycorporate.jsx";
import "./index.css";
import Cart from "./pages/Cart.jsx";
import RestaurantCardMenu from "./component/RestaurantCardMenu.jsx";
import { store } from './store.js'
import { Provider } from 'react-redux'
import LogInForm from "./pages/LogInForm.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "swiggy_corporate",
        element: <Swiggycorporate/>,
      }, 
    ],
  }, 
  {
    path: "/offers",
    element: <Offers />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/help",
    element: <Help />, // separate page, not inside App.jsx layout
  },
  {
    path: "/restaurants/menu/:restId",
    element: <RestaurantCardMenu/> ,
  },
  {
    path: "/loginForm",
    element: <LogInForm/> 
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
     <ToastContainer />
  </StrictMode>
);
