import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import Application from "../pages/Application/Application";
import AdminPanel from "../pages/AdminPanel/AdminPanel";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            },
            {
                path : '/application',
                element :<Application></Application>
            },
            {
                path : '/dashboard',
                element :<AdminPanel></AdminPanel>
            }
        ]
    }
])

export default router;