import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("http://localhost:5000/"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

export default router;
