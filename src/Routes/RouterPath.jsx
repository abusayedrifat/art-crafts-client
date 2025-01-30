import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllArtCrafts from "../Pages/AllArtCrafts/AllArtCrafts";
import PrivateRouter from "./PrivateRouter";
import AddCrafts from "../Pages/AddCrafts/AddCrafts";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/crafts')
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
                path:'/addCrafts',
                element:<AddCrafts></AddCrafts>
            },
            {
                path:'/myArtCrafts',
                element: <PrivateRouter><AllArtCrafts></AllArtCrafts></PrivateRouter>
            }
        ]
    }
])

export default router