import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import MyCart from "../Pages/MyCart/MyCart";
import AddProduct from "../Pages/AddProduct";
import Apple from "../Pages/Brands/Apple/Apple";
import Samsung from "../Pages/Brands/Samsung/Samsung";
import Sony from "../Pages/Brands/Sony/Sony";
import Xiaomi from "../Pages/Brands/Xiaomi/Xiaomi";
import Microsoft from "../Pages/Brands/Microsoft/Microsoft";
import Google from "../Pages/Brands/Google/Google";
import UpdateProducts from "../Pages/UpdateProducts";
import AppleIpadAir from "../Pages/Brands/Apple/Details/AppleIpadAir";

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
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
      },
      {
        path: "/microsoft",
        element: <Microsoft></Microsoft>,
      },
      {
        path: "/google",
        element: <Google></Google>,
      },
      {
        path: "/apple/updateproducts/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/apple/6530d093250db7547e920816",
        element: (
          <PrivateRoute>
            <AppleIpadAir></AppleIpadAir>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
    ],
  },
]);

export default router;
