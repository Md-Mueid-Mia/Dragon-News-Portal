import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "./PrivetRoute";
import Career from "../Pages/Career";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader:({params})=> fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
            {
                path: '/career',
                element: <Career/>
            },
            {
                path: '/about',
                element: <About/>,
            }
        ]
    },
    {
        path: "/news/:id",
        element: <PrivetRoute><NewsDetails /></PrivetRoute>,
        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element:<Login/>
            },
            {
                path: "/auth/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "*",
        element: <h2>Error</h2>
    },
])

export default router;