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
import NoteBook from "../pages/Dashboard/NoteBook/NoteBook";
import SingleNote from "../pages/Dashboard/NoteBook/SingleNote";
import AddNote from "../pages/Dashboard/NoteBook/AddNote";
import CheckOut from "../pages/CheckOut/CheckOut";
import ErrorPage from "../pages/404Error/ErrorPage";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import AddProblemSolving from "../pages/Problems/AddProblemSolving/AddProblemSolving";
import PrivateRoute from "./PrivateRoute";
import PaymentSuccess from "../pages/Subscribe/PaymentSuccess";
import PaymentFail from "../pages/Subscribe/PaymentFail";
import MySubmissions from "../pages/MySubmissions/MySubmissions";
import AllTestimonials from "../pages/Home/AllTestimonials/AllTestimonials";
import AdminDashboard from "../pages/AdminDashbord/AdminDashboard";
import ManageUser from "../pages/AdminDashbord/ManageUser/ManageUser";
// import ProblemDetails from "../pages/Problems/ProblemDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

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
        loader: () => fetch(`http://localhost:5000/blog/all`),
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
        path: "/add-problems",
        element: <AddProblemSolving />,
      },
      {
        path: "/dashboard",
        element: <DashboardHome />,
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
        element: <ProfileEdit />,
      },
      {
        path: "/playground",
        element: <ComingSoon />,
      },
      {
        path: "/notebooks",
        element: <NoteBook />,
      },
      {
        path: "/add-note",
        element: <AddNote />,
      },
      {
        path: "/notebook/:id",
        element: <SingleNote />,
      },
      {
        path: "/my-submittions",
        element: <MySubmissions />,
      },
      {
        path: "/notebook",
        element: <ComingSoon />,
      },
      {
        path: "/subscribe",
        element: (
          <PrivateRoute>
            <Subscribe />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFail />,
      },
      {
        path: "/submissions",
        element: <ComingSoon />,
      },
      {
        path: "/leader-board",
        element: <LeaderBoard />,
      },
      {
        path: "/allTestimonials",
        element: <AllTestimonials></AllTestimonials>
      },{
        path: "/admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/manageuser",
        element: <ManageUser />,
      },
    ],
  },
]);

export default router;
