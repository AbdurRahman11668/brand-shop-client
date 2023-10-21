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
import Details from "../Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://brans-shop.vercel.app/"),
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
        loader: () => fetch("https://brans-shop.vercel.app/products"),
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
        loader: () => fetch("https://brans-shop.vercel.app/products"),
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch("https://brans-shop.vercel.app/products"),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch("https://brans-shop.vercel.app/products"),
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch("https://brans-shop.vercel.app/products"),
      },
      {
        path: "/microsoft",
        element: <Microsoft></Microsoft>,
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch("https://brans-shop.vercel.app/products"),
      },
      {
        path: "/updateproducts/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(`https://brans-shop.vercel.app/products/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://brans-shop.vercel.app/products/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://brans-shop.vercel.app/cart"),
      },
      
    ],
  },
]);

export default router;
