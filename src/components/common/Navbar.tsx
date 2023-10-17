import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border-base/25 fixed left-0 top-0 flex w-screen items-center justify-between border-b bg-black px-3 py-4 text-white">
            <div>
                <h3 className="text-2xl font-semibold">Credma</h3>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="hover:text-highlight transition-colors">
                        <NavLink
                            className={({ isActive }) =>
                                `px-2 ${
                                    isActive
                                        ? "text-highlight underline decoration-2 underline-offset-2"
                                        : ""
                                }`
                            }
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className="hover:text-highlight transition-colors">
                        <NavLink
                            className={({ isActive }) =>
                                `px-2 ${
                                    isActive
                                        ? "text-highlight underline decoration-2 underline-offset-2"
                                        : ""
                                }`
                            }
                            to="/signup"
                        >
                            Signup
                        </NavLink>
                    </li>
                    <li className="hover:text-highlight transition-colors">
                        <NavLink
                            className={({ isActive }) =>
                                `px-2 ${
                                    isActive
                                        ? "text-highlight underline decoration-2 underline-offset-2"
                                        : ""
                                }`
                            }
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
