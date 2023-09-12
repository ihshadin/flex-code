import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore";
import Problems from "../pages/Problems/Problems";
import LangBasedProblems from "../pages/Problems/LangBasedProblems";
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
import MyPlayGround from "../pages/MyPlayGround/MyPlayGround";
import PlayGround from "../pages/MyPlayGround/PlayGround/PlayGround";
import ManageUser from "../pages/AdminDashbord/ManageUser/ManageUser";
import ExploreDetails from "../pages/Explore/ExploreDetails";
import AdminCalendar from "../pages/AdminDashbord/AdminCalendar/AdminCalendar";
import AllTestimonials from "../pages/Home/AllTestimonials/AllTestimonials";
import Dashboard from "../layouts/Dashboard";
import AdminMainContent from "../pages/AdminDashbord/AdminMainContent/AdminMainContent";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import SendEmail from "../pages/AdminDashbord/SendEmail/SendEmail";
import PreProject from "../pages/MyPlayGround/PreProject/PreProject";
import FooterSection from "../pages/Shared/FooterSection/FooterSection";

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
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "add-note",
        element: <AddNote />,
      },
      {
        path: "/problems",
        element: <Problems />,
      },
      {
        path: "/problems/:languages",
        element: <LangBasedProblems />,
      },
      {
        path: "/problem/:id",
        element: <PrivateRoute><ProblemDetails /></PrivateRoute>,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/feedback",
        element: <PrivateRoute><Feedback /></PrivateRoute>,
      },
      {
        path: "/profile",
        element: <ProfileEdit />,
      },
      {
        path: "/My-playground",
        element: <MyPlayGround />,
      },
      {
        path: "/pre-project/:id",
        element: <PreProject />,
      },
      {
        path: "/playground",
        element: <PlayGround />,
      },
      {
        path: "/notebooks",
        element: <NoteBook />,
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
        element: <Subscribe />,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckOut /></PrivateRoute>,
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
        element: <AllTestimonials />,
      },
      {
        path: "/explore/:id",
        element: <ExploreDetails />,
      },
      {
        path: "/:username",
        element: <DashboardHome />,
      },
      {
        path: "/allMenuFooter",
        element: <FooterSection />
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <AdminMainContent />
          </PrivateRoute>
        ),
      },
      {
        path: "manageuser",
        element: (
          <PrivateRoute>
            <ManageUser />
          </PrivateRoute>
        ),
      },
      {
        path: "add-problems",

        element: (
          <PrivateRoute>
            <AddProblemSolving />
          </PrivateRoute>
        ),
      },
      {
        path: "add-blog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "calendar",
        element: (
          <PrivateRoute>
            <AdminCalendar />
          </PrivateRoute>
        ),
      },
      {
        path: "contacts",
        element: (
          <PrivateRoute>
            <SendEmail />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;
