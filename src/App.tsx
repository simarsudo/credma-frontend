import { createBrowserRouter } from "react-router-dom";
import Index from "./views/Index";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound404 from "./views/NotFound404";
import Projects from "./views/Projects";
import Project from "./views/Project";
import StudentDashboard from "./views/StudentDashboard";
import StudentProfileSettings from "./views/StudentProfileSettings";

const CustomRoutes = createBrowserRouter([
    { path: "/", element: <Index /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:id", element: <Project /> },
    { path: "/student/dashboard", element: <StudentDashboard /> },
    { path: "/student/profile", element: <StudentProfileSettings /> },
    { path: "*", element: <NotFound404 /> },
]);

export default CustomRoutes;
