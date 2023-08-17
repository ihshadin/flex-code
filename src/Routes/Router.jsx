import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Explore from "../pages/Explore/Explore";
import Problems from "../pages/Problems/Problems";
import AllProblems from "../pages/Problems/AllProblems";
import ProfileEdit from "../pages/Dashboard/ProfileEdit/ProfileEdit";
import SingleBlog from "../pages/Blog/SingleBlog/SingleBlog";

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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog:id",
        element: <SingleBlog />,
      },
      {
        path: "/problems",
        element: <Problems />,
      },
      {
        path: "/problems/:languages",
        element: <AllProblems />,
      },
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: '/explore',
        element: <Explore/>
      },
      {
        path: '/profile',
        element: <ProfileEdit></ProfileEdit>
      }
    ],
  },
]);

export default router;
