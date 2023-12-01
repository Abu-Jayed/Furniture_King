import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Eid_deals_detail from "../components/Home/EidDeals/Eid_deals_detail";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import MyCart from "../components/Pages/MyCart/MyCart";

  const router = createBrowserRouter([
    {
      
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "eid_deals/:id",
          element: <Eid_deals_detail></Eid_deals_detail>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "my-cart",
          element: <MyCart></MyCart>
        }
      ]
    },
  ]);

export default router;