import React from "react";
import { Disclosure } from "@headlessui/react";
import logo from "../images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Check ATS", href: "/score" },
  { name: "About Us", href: "/about" },
  { name: "Login", href: "/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-4 max-w-7x1 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Your Company"
                  src={logo}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex justify-end space-x-4">
              {navigation.map((item) =>
                item.name === "Login" && user ? (

                  
                  // If the user is logged in, show their name and logout option
                  <div key="user-section" className="flex items-center space-x-4">

                  <ul>
                    <li onClick={handleLogout} className="logout text-white">
                    Logout
                    </li>
                  </ul>
                  
                    <span className="text-white rounded-md px-3 py-2 text-sm font-medium">
                      {user.name}
                    </span>
                    </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={
                      location.pathname === item.href ? "page" : undefined
                    }
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
