import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
    const isAuthenticated = useAppSelector(
        (state) => state.User.isAuthenticated,
    );

    return (
        <nav className="fixed left-0 top-0 z-40 flex w-screen items-center justify-between border-b border-base/25 bg-black px-5 py-4 text-white">
            <div>
                <h3 className="text-2xl font-semibold">Credma</h3>
            </div>
            <div>
                <ul className="flex items-center gap-2">
                    {!isAuthenticated && (
                        <>
                            <li className="transition-colors hover:text-highlight">
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
                            <li className="transition-colors hover:text-highlight">
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
                        </>
                    )}

                    <li className="transition-colors hover:text-highlight">
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

                    {isAuthenticated && (
                        <li>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger className="flex items-center justify-center">
                                    <UserCircleIcon className="h-7 w-7" />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content className="z-50 mr-5 mt-4 flex flex-col gap-2 rounded bg-white p-4">
                                        <DropdownMenu.Label>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `px-2 ${
                                                        isActive
                                                            ? "text-highlight underline decoration-2 underline-offset-2"
                                                            : ""
                                                    }`
                                                }
                                                to="/student/profile"
                                            >
                                                My Profile
                                            </NavLink>
                                        </DropdownMenu.Label>
                                        <DropdownMenu.Label>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `px-2 ${
                                                        isActive
                                                            ? "text-highlight underline decoration-2 underline-offset-2"
                                                            : ""
                                                    }`
                                                }
                                                to="/student/dashboard"
                                            >
                                                Dashboard
                                            </NavLink>
                                        </DropdownMenu.Label>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
