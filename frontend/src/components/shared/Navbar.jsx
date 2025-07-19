import React, { useState, useEffect, useRef } from 'react'; 
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sidebarRef = useRef(null);

    const logoutHandler = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`, {
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <div>
            <div className="flex justify-between items-center mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 relative z-20">
                <div>
                    <Link to="/">
                        <h1 className="text-3xl font-bold">
                            Job<span className="text-[#2fff52f8]">Tube</span>
                        </h1>
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">
                        {user && user?.role === "recruiter" ? (
                            <>
                                <NavLink
                                    to="/admin/companies"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400"
                                            : "hover:text-green-500 hover:underline"
                                    }
                                >
                                    Companies
                                </NavLink>
                                <NavLink
                                    to="/admin/jobs"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400"
                                            : "hover:text-green-500 hover:underline"
                                    }
                                >
                                    Jobs
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400"
                                            : "hover:text-green-500 hover:underline"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/job"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400"
                                            : "hover:text-green-500 w-full hover:underline"
                                    }
                                >
                                    Jobs
                                </NavLink>
                                <NavLink
                                    to="/browse"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400"
                                            : "hover:text-green-500 hover:underline"
                                    }
                                >
                                    Browse
                                </NavLink>
                            </>
                        )}
                    </ul>
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <Button className="border border-[#2fff52f8] hover:px-10 rounded uppercase transition-all duration-500 hover:bg-[#2fff52f8] hover:text-black">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#2fff52f8] text-black hover:px-10 rounded uppercase transition-all duration-500 hover:bg-[#2fff52f8] hover:text-black">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage
                                        src={
                                            user?.profile?.profilePhoto ||
                                            "https://github.com/shadcn.png"
                                        }
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="flex items-center gap-5">
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage
                                            src={
                                                user?.profile?.profilePhoto ||
                                                "https://github.com/shadcn.png"
                                            }
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-lg font-medium">{user?.fullName}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {user?.profile?.bio}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col my-2 text-gray-600">
                                    {user && user.role === "student" && (
                                        <Link to="/profile">
                                            <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>
                                        </Link>
                                    )}
                                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                                        <LogOut />
                                        <Button onClick={logoutHandler} variant="link">
                                            Logout
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMobileMenu} 
                ></div>
            )}

            <div
                ref={sidebarRef} 
                className={`fixed inset-y-0 right-0 w-64 bg-gray-900 z-50 transform md:hidden transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        <X size={24} />
                    </button>
                </div>
                <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                    <ul className="flex flex-col font-medium items-center gap-3">
                        {user && user?.role === "recruiter" ? (
                            <>
                                <NavLink
                                    to="/admin/companies"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400 block px-3 py-2 rounded-md text-base font-medium"
                                            : "text-gray-300 hover:bg-green-700 w-full hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Companies
                                </NavLink>
                                <NavLink
                                    to="/admin/jobs"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400 block px-3 py-2 rounded-md text-base font-medium"
                                            : "text-gray-300 hover:bg-green-700 w-full hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Jobs
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400 block px-3 py-2 rounded-md text-base font-medium"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/job"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400 block px-3 py-2 rounded-md text-base font-medium"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Jobs
                                </NavLink>
                                <NavLink
                                    to="/browse"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-green-400 border-b-2 border-green-400 block px-3 py-2 rounded-md text-base font-medium"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Browse
                                </NavLink>
                            </>
                        )}
                    </ul>
                    {!user ? (
                        <div className="flex flex-col items-center gap-2 mt-4">
                            <Link to="/login" onClick={toggleMobileMenu}>
                                <Button className="w-full border border-[#2fff52f8] hover:px-10 rounded uppercase transition-all duration-500 hover:bg-[#2fff52f8] hover:text-black">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup" onClick={toggleMobileMenu}>
                                <Button className="w-full bg-[#2fff52f8] text-black hover:px-10 rounded uppercase transition-all duration-500 hover:bg-[#2fff52f8] hover:text-black">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2 mt-4">
                            {user && user.role === "student" && (
                                <Link to="/profile" onClick={toggleMobileMenu}>
                                    <Button className="w-full" variant="ghost">
                                        <User2 className="mr-2" /> View Profile
                                    </Button>
                                </Link>
                            )}
                            <Button onClick={() => { logoutHandler(); toggleMobileMenu(); }} variant="ghost" className="w-full">
                                <LogOut className="mr-2" /> Logout
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <hr className="border-gray-700 w-full mt-2" />
        </div>
    );
};

export default Navbar;