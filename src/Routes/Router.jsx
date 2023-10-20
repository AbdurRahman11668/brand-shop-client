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
import Iphone15ProMax from "../Pages/Brands/Apple/Details/Iphone15ProMax";
import MacbookAir from "../Pages/Brands/Apple/Details/MacbookAir";
import WatchSeries7 from "../Pages/Brands/Apple/Details/WatchSeries7";
import AirPodsMax from "../Pages/Brands/Apple/Details//AirPodsMax";
import CurvedMonitor from "../Pages/Brands/Samsung/Details/CurvedMonitor";
import GalaxyWatch6 from "../Pages/Brands/Samsung/Details/GalaxyWatch6";
import Crystal4K from "../Pages/Brands/Samsung/Details/Crystal4K";
import GalaxyS23 from "../Pages/Brands/Samsung/Details/GalaxyS23";
import GalaxyZFlip from "../Pages/Brands/Samsung/Details/GalaxyZFlip";
import WhCh510 from "../Pages/Brands/Sony/Details/WhCh510";
import Bravia from "../Pages/Brands/Sony/Details/Bravia";
import Swr50 from "../Pages/Brands/Sony/Details/Swr50";
import Xperia1IV from "../Pages/Brands/Sony/Details/Xperia1IV";
import HeadSet from "../Pages/Brands/Xiaomi/Details/HeadSet";
import Xiaomi12Pro from "../Pages/Brands/Xiaomi/Details/Xiaomi12Pro";
import Xiaomi13Pro from "../Pages/Brands/Xiaomi/Details/Xiaomi13Pro";
import MiNotebookPro from "../Pages/Brands/Xiaomi/Details/MiNotebookPro";
import Pixel8Pro from "../Pages/Brands/Google/Details/Pixel8Pro";
import PixelBuds from "../Pages/Brands/Google/Details/PixelBuds";
import PixelbookGo from "../Pages/Brands/Google/Details/PixelbookGo";
import USBCEarbuds from "../Pages/Brands/Google/Details/USBCEarbuds";

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
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/xiaomi",
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/microsoft",
        element: <Microsoft></Microsoft>,
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/updateproducts/:id",
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
      {
        path: "/apple/6530d0f3b088b100d5860690",
        element: (
          <PrivateRoute>
            <Iphone15ProMax></Iphone15ProMax>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/apple/6530d11bb088b100d5860691",
        element: (
          <PrivateRoute>
            <MacbookAir></MacbookAir>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/apple/6530d169b088b100d5860693",
        element: (
          <PrivateRoute>
            <WatchSeries7></WatchSeries7>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/apple/6530e882250db7547e92081b",
        element: (
          <PrivateRoute>
            <AirPodsMax></AirPodsMax>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },

      {
        path: "/samsung/6530d199b088b100d5860696",
        element: (
          <PrivateRoute>
            <CurvedMonitor></CurvedMonitor>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/samsung/6530e8f7250db7547e92081c",
        element: (
          <PrivateRoute>
            <GalaxyWatch6></GalaxyWatch6>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/samsung/6530e94a250db7547e92081d",
        element: (
          <PrivateRoute>
            <Crystal4K></Crystal4K>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/samsung/6530ea62250db7547e92081f",
        element: (
          <PrivateRoute>
            <GalaxyS23></GalaxyS23>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/samsung/6530e9a4250db7547e92081e",
        element: (
          <PrivateRoute>
            <GalaxyZFlip></GalaxyZFlip>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/sony/6530d179b088b100d5860694",
        element: (
          <PrivateRoute>
            <Bravia></Bravia>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/sony/6530e812250db7547e92081a",
        element: (
          <PrivateRoute>
            <WhCh510></WhCh510>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/sony/6530ec66250db7547e920820",
        element: (
          <PrivateRoute>
            <Swr50></Swr50>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/sony/6530ecac250db7547e920821",
        element: (
          <PrivateRoute>
            <Xperia1IV></Xperia1IV>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/xiaomi/6530d150b088b100d5860692",
        element: (
          <PrivateRoute>
            <HeadSet></HeadSet>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/xiaomi/6530e6e1250db7547e920817",
        element: (
          <PrivateRoute>
            <Xiaomi12Pro></Xiaomi12Pro>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/xiaomi/6530e754250db7547e920818",
        element: (
          <PrivateRoute>
            <Xiaomi13Pro></Xiaomi13Pro>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/xiaomi/6530e797250db7547e920819",
        element: (
          <PrivateRoute>
            <MiNotebookPro></MiNotebookPro>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/google/6530d189b088b100d5860695",
        element: (
          <PrivateRoute>
            <Pixel8Pro></Pixel8Pro>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/google/6530f885250db7547e920825",
        element: (
          <PrivateRoute>
            <PixelBuds></PixelBuds>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/google/6530f8c4250db7547e920826",
        element: (
          <PrivateRoute>
            <PixelbookGo></PixelbookGo>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/google/6530f92b250db7547e920827",
        element: (
          <PrivateRoute>
            <USBCEarbuds></USBCEarbuds>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      
    ],
  },
]);

export default router;
