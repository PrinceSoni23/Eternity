"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiBell,
  FiSun,
  FiMoon,
  FiX,
  FiMenu, // Import the hamburger icon
} from "react-icons/fi";
import CompanySettings from "./Components/CompanySettings";
import ProductManagement from "./Components/ProductManagement";
import RolesPermissions from "./Components/RolesPermissions";
import TeamManagement from "./Components/TeamManagement";
import Image from "next/image";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({  }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);


  // Set default activeContent to "Company Settings" on page load
  useEffect(() => {
    setActiveContent("Company Settings");
  }, []);

  return (
    <div
      className={`flex h-screen ${isDarkMode ? "bg-gray-100" : "bg-gray-100"
        } overflow-hidden`}
    >
      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-30 w-64 bg-gray-100 dark:bg-gray-700  h-full flex-shrink-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center dark:border-gray-700">
          <h1 className="text-xl sm:text-2xl font-bold dark:text-white truncate">
            ETERNITY LABS
          </h1>
          <button
            className="block lg:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>
        <nav className="mt-4 ml-5 sm:mt-3">
          <ul className="space-y-0 sm:space-y-0">
            {[
              { key: "Company Settings", href: "/Owner_Settings", label: "Company Setting" },
              { key: "Product Management", href: "/Owner_Settings", label: "Product Management" },
              { key: "Permissions", href: "/Owner_Settings", label: "Permissions" },
              { key: "Team Management", href: "/Owner_Settings", label: "Team Management" },
              { key: "Notifications", href: "/Owner_Settings", label: "Notifications" },
            ].map(({ key, href, label }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="flex mr-6 items-center px-3 sm:px-4 py-2 sm:py-3 text-black hover:bg-[#EFE5FE] dark:hover:bg-gray-900 rounded dark:text-gray-200"
                  onClick={() => setActiveContent(key)}
                >
                  <span className="text-sm ml-2 sm:text-base"> {label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden dark:bg-gray-700">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-100 dark:bg-gray-700 overflow-x-auto">
          {/* Left Section */}
          <button
            className="lg:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsSidebarOpen(true)} // Open sidebar on click of hamburger
          >
            <FiMenu size={20} />
          </button>

          {/* Center Section */}
          <div className="flex-grow flex items-center justify-center min-w-0">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md">
              <FiSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-gray-300 text-xs sm:text-sm" />
              <input
                type="text"
                placeholder="Search"
                className="w-full text-black pl-8 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-purple-200 dark:focus:ring-purple-700"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div
              className={`w-10 sm:w-12 h-5 sm:h-6 flex items-center rounded-full p-1 cursor-pointer ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
              onClick={() => {
                const newMode = !isDarkMode;
                setIsDarkMode(newMode);
                localStorage.setItem("dark-mode", newMode.toString());
                if (newMode) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              }}
            >
              <div
                className={`w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center rounded-full bg-white shadow-md transform transition-transform ${isDarkMode ? "translate-x-5 sm:translate-x-6" : "translate-x-0"}`}
              >
                {isDarkMode ? (
                  <FiMoon className="text-gray-800 dark:text-gray-900 text-xs sm:text-sm" />
                ) : (
                  <FiSun className="text-yellow-500 text-xs sm:text-sm" />
                )}
              </div>
            </div>
            <button className="p-1 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              <FiBell className="text-xs sm:text-sm" />
            </button>
            <div className="relative">
              {/* Profile Icon */}
              <div
                className="flex items-center space-x-1 sm:space-x-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Image
                  src="/prince.png"
                  alt="John Walker"
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full"
                />
                <span className="text-xs sm:text-sm text-gray-600">John Walker</span>
              </div>

              {/* Dropdown */}
              {isOpen && (
                <div className="fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                  <h3 className="font-bold text-sm  text-gray-800">Account</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <Image
                      src="/prince.png"
                      alt="John Walker"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold dark:text-black text-sm">John Walker</p>
                      <p className="text-sm text-black">johnwalker@example.com</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <button className="flex items-center justify-between w-full text-sm font-semibold text-gray-800">
                      Manage Account
                      <span className="text-lg"><Image src="/icons/dd.png" alt="" /></span>
                    </button>
                    <button className="flex items-center justify-between w-full text-sm font-semibold text-red-600">
                      Log Out
                      <span className="text-lg"><Image src="/icons/log-out.png" alt="" /></span>
                    </button>
                  </div>
                </div>
              )}
            </div>


          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 p-3 sm:p-4 md:p-2 bg-white md:rounded-tl-3xl dark:bg-gray-800 overflow-auto">
          {/* Dynamic Content Based on Active Content */}
          {activeContent === "Company Settings" && <CompanySettings />}
          {activeContent === "Product Management" && <ProductManagement />}
          {activeContent === "Permissions" && <RolesPermissions /> }
          {activeContent === "Team Management" && <TeamManagement />}
          {activeContent === "Notifications" && <></>}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
