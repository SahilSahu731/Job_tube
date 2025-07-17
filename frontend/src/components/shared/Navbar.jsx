import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const user = false

  return (
    <div>
      <div className="flex justify-between items-center mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-3xl font-bold">
            Job<span className="text-[#2fff52f8]">Tube</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-green-400 border-b-2 border-green-400' : 'hover:text-green-500 hover:underline')}>Home</NavLink>
            <NavLink to="/job" className={({ isActive }) => (isActive ? 'text-green-400 border-b-2 border-green-400' : 'hover:text-green-500 hover:underline')}>Jobs</NavLink>
            <NavLink to="/browse" className={({ isActive }) => (isActive ? 'text-green-400 border-b-2 border-green-400' : 'hover:text-green-500 hover:underline')}>Browse</NavLink>
          </ul>
          {
            !user ? (
               <div className='flex items-center gap-2'>
                <Link to="/login">
                  <Button className="border border-[#2fff52f8] hover:px-10 rounded uppercase transition-all duration-500 hover:bg-[#2fff52f8] hover:text-black">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#2fff52f8] text-black hover:px-10 rounded uppercase transition-all duration-500 hover:bg-[#2fff52f8] hover:text-black">Signup</Button>
                </Link>
              </div>
            ) : (
               <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex items-center gap-5">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">Sahil sahu</h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2 text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button variant="link">
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
          
        </div>
      </div>
      <hr className="border-gray-700 w-full mt-2" />
    </div>
  );
};

export default Navbar;
