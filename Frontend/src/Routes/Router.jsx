import { createBrowserRouter } from "react-router";
import Create from "../Pages/Create"
import Edit from "../Pages/Edits"
import  Login from "../Pages/Login";
import Post from "../Pages/PostDetail"
import Register from "../Pages/Register"
import Layout from "../Components/Layout";
import Home from "../Pages/Home";


const router = createBrowserRouter(
    [
        {path:"/", element:<Layout />,
            children:[
                {path:"/home", element:<Home />},
                {path:"/edit/:id", element:<Edit />},
                {path:"/create", element:<Create />},
                {path:"/post/:id", element:<Post />},
                {path:"/login", element:<Login />},
                {path:"/register", element:<Register />},
            ]
        },
    ]
);
export default router;