import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
// import AddProducts from "../Pages/AddProducts";

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
      // {
      //   path: "/card/:id",
      //   element: (
      //     <PrivateRoute>
      //       <AddProducts></AddProducts>
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch('/categories.json')
      // },
    ],
  },
]);

export default router;
