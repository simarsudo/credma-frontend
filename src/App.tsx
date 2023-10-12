import { createBrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import Login from "./views/Login";
import Signup from "./views/Signup";

const CustomRoutes = createBrowserRouter([
    { path: "/", element: <Index /> },
    {
        path: "/login",
        element: <Login />,
    },
    { path: "/signup", element: <Signup /> },
]);

export default CustomRoutes;
