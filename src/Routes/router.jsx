import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;