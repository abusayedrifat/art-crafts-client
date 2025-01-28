import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllArtCrafts from "../Pages/AllArtCrafts/AllArtCrafts";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/myArtCrafts',
                element: <PrivateRouter><AllArtCrafts></AllArtCrafts></PrivateRouter>
            }
        ]
    }
])

export default router