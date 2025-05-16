"use client";

import { FC, useState } from "react";
import Image from "next/image";
import {
  FiTrendingUp,
  FiSearch,
  FiBell,
  FiSun,
  FiChevronDown,
  FiMoon,
} from "react-icons/fi";

const HS: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="-mt-10">
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-white overflow-x-auto">
          {/* Left Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 border rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <span>Week</span>
              <FiChevronDown className="text-gray-600" />
            </button>
            <select name="filter" id="filter" className="border rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-600 focus:outline-none focus:ring focus:ring-purple-200"> Filter
              <option value="hourly" > Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 border rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <FiTrendingUp className="text-sm sm:text-base" />
              <FiChevronDown className="text-gray-600" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 border text-center rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm">
              ...
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs sm:text-sm" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-purple-200"
              />
            </div>

            {/* Dark Mode Toggle */}
            <div
              className={`w-12 sm:w-16 h-6 sm:h-8 flex items-center rounded-full p-1 cursor-pointer ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <div
                className={`w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center rounded-full bg-white shadow-md transform transition-transform ${
                  isDarkMode
                    ? "translate-x-6 sm:translate-x-8"
                    : "translate-x-0"
                }`}
              >
                {isDarkMode ? (
                  <FiMoon className="text-gray-800 text-xs sm:text-sm" />
                ) : (
                  <FiSun className="text-yellow-500 text-xs sm:text-sm" />
                )}
              </div>
            </div>

            {/* Notifications */}
            <button className="p-1 sm:p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">
              <FiBell className="text-xs sm:text-sm" />
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Image
                src="https://via.placeholder.com/40"
                alt="John Walker"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full"
              />
              <span className="text-xs sm:text-sm text-gray-600">John Walker</span>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default HS;
