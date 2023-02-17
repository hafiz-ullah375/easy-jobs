import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import About from "../../Pages/About/About";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])