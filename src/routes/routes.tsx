import App from "@/App";
import About from "@/Pages/Home/About";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/" ,
        element:<App/>,
        children:[
            {
                path:"/" ,
                element:<Home/>
            },
            {
                path:"/about" ,
                element:<About/>
            }
        ]
    }
])

export default router ;