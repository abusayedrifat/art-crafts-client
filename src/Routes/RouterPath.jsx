import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllArtCrafts from "../Pages/AllArtCrafts/AllArtCrafts";
import PrivateRouter from "./PrivateRouter";
import AddCrafts from "../Pages/AddCrafts/AddCrafts";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import ErrorElement from "../ErrorElement";
import LandscapePainting from "../components/SubCategories/LandscapePainting";
import OilPainting from "../components/SubCategories/OilPainting";
import PortraitDrawing from "../components/SubCategories/PortraitDrawing";
import CharcoaSketching from "../components/SubCategories/CharcoaSketching";
import WaterColorPainting from "../components/SubCategories/WaterColorPainting";
import CartoonDrawing from "../components/SubCategories/CartoonDrawing";
import MyArtsCrafts from "../Pages/MyArtsCrafts/MyArtsCrafts";
import UpdateMyCrfats from "../Pages/UpdateMyCrfats/UpdateMyCrfats";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                loader:()=>fetch('http://localhost:5000/crafts'),
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
                path:'/addCrafts',
                element:<PrivateRouter><AddCrafts></AddCrafts></PrivateRouter> 
            },
           
            {
                path:'/allArtCrafts',
                element:<AllArtCrafts></AllArtCrafts>,
                loader:()=>fetch('http://localhost:5000/crafts')
            },
            {
                path:'/crafts/viewDetails/:id',
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`),
                element: <PrivateRouter><DetailsPage></DetailsPage></PrivateRouter>,
            },
            {
                path:'/subCategory/LandscapePainting',
                loader:()=>fetch('http://localhost:5000/category/LandscapePainting'),
                element:<LandscapePainting></LandscapePainting>
            },
            {
                path:'/subCategory/OilPainting',
                loader:()=>fetch('http://localhost:5000/category/OilPainting'),
                element:<OilPainting></OilPainting>
            },
            {
                path:'/subCategory/PortraitDrawing',
                loader:()=>fetch('http://localhost:5000/category/PortraitDrawing'),
                element:<PortraitDrawing></PortraitDrawing>
            },
            {
                path:'/subCategory/CharcoaSketching',
                loader:()=>fetch('http://localhost:5000/category/CharcoaSketching'),
                element:<CharcoaSketching></CharcoaSketching>
            },
            {
                path:'/subCategory/WaterColorPainting',
                loader:()=>fetch('http://localhost:5000/category/WaterColorPainting'),
                element:<WaterColorPainting></WaterColorPainting>
            },
            {
                path:'/subCategory/CartoonDrawing',
                loader:()=>fetch('http://localhost:5000/category/CartoonDrawing'),
                element:<CartoonDrawing></CartoonDrawing>
            },
            {
                path:'/myArtCrafts/:email',
                loader:({params})=>fetch(`http://localhost:5000/crafts/specificUser/${params.email}`),
                element: <PrivateRouter><MyArtsCrafts></MyArtsCrafts></PrivateRouter>,
            },
            {
                path:'/updateMyCrafts/:id',
                loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`),
                element:<UpdateMyCrfats></UpdateMyCrfats>
            }
        ]
    }
])

export default router