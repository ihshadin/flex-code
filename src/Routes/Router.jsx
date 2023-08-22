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
import Feedback from "../components/Feedback/Feedback";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import AddBlog from "../pages/Blog/AddBlog/AddBlog";
import Subscribe from "../pages/Subscribe/Subscribe";
import ProblemDetails from "../pages/Problems/ProblemDetails";
// import ProblemDetails from "../pages/Problems/ProblemDetails";

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
        path: "/blog/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://flex-code-server.vercel.app/blog/${params.id}`),
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
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
        path: "/problem/:id",
        element: <ProblemDetails />,
        // loader: ({ params }) => fetch(`http://localhost:5173/problems.json/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/profile",
        element: <ProfileEdit></ProfileEdit>,
      },
      {
        path: "/playground",
        element: <ComingSoon />,
      },
      {
        path: "/notebook",
        element: <ComingSoon />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
      {
        path: "/submissions",
        element: <ComingSoon />,
      },
    ],
  },
]);

export default router;
