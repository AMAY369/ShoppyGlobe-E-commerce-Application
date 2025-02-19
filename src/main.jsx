import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Error from "./components/Error.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import Cart from "./components/cartComponents/Cart.jsx";
import ProductList from "./components/product/ProductList.jsx";
// import ProductDetails from "./components/productComponents/ProductDetails.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import CheckOut from "./components/CheckOut.jsx";
// import OrderConfirmation from "./components/OrderConfirmation.jsx";
import { lazy, Suspense } from "react";
import Home from "./components/Home.jsx";

const Cart = lazy(()=> import ('./components/cart/Cart.jsx'))
const ProductDetails = lazy(()=> import('./components/product/ProductDetails.jsx'))
const Checkout = lazy(()=> import('./components/general/Checkout.jsx'))
const OrderConfirmation = lazy(()=> import('./components/general/OrderConfirmation.jsx'))
const Error = lazy(()=> import('./components/general/Error.jsx'))

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>,
      },
      {
        path: "/productDetails/:id",
        element: <Suspense fallback={<div>Loading...</div>}><ProductDetails /></Suspense>,
      },
      {
        path: "/checkout",
        element: <Suspense fallback={<div>Loading...</div>} ><Checkout /></Suspense>,
      },
      {
        path: "/orderConfirmation",
        element: <Suspense fallback={<div>Loading...</div>} ><OrderConfirmation /></Suspense>,
      },
    ],
    errorElement: <Suspense fallback={<div>Loading...</div>} ><Error /></Suspense>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>
);