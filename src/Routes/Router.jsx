import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import OurPartners from "../Home/OurPartners/OurPartners";
import UserCount from "../Home/UserCount/UserCount";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
