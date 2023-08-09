import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import OurPartners from "../Home/OurPartners/OurPartners";
import UserCount from "../Home/UserCount/UserCount";
import MainLayout from "../layouts/MainLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
        
    }
])

export default router;