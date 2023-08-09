import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import OurPartners from "../Home/OurPartners/OurPartners";
import UserCount from "../Home/UserCount/UserCount";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    }
])

export default router;