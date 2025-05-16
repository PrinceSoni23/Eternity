'use client';

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiSun,
  FiMoon,
  FiX,
  FiMenu,
  FiChevronDown, // Import the hamburger icon
} from "react-icons/fi";
import Image from 'next/image';
import {
  walsheim_bold,
  walsheim_light,
  walsheim_medium,
  walsheim_regular,
} from "@/components/constants";
import { cn } from '@/lib/utils';

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import NotificationManagement from "@/app/(Owner_Settings)/Owner_Settings/Components/Notifications";

// interface DashboardLayoutProps {
//   children: ReactNode;
// }


// Default value



const notifications = [
  {
    id: 1,
    name: 'Tania send you a message',
    time: '13 minutes ago',
    description: "A list of new leads has been added to your dashboard",
    avatar: '/icons/notification1.png',
  },
  {
    id: 2,
    name: 'Natali replied to your email.',
    time: '1 hour ago',
    description: "A list of new leads has been added to your dashboard",
    avatar: '/icons/notification2.png',
  },
  {
    id: 3,
    name: "You've received a payment.",
    time: '5 hours ago',
    description: "A list of new leads has been added to your dashboard",
    avatar: '/icons/notification1.png',
  },
  {
    id: 4,
    name: "You've received a payment.",
    time: '6 hours ago',
    description: "A list of new leads has been added to your dashboard",
    avatar: '/icons/notification1.png',
  },
  {
    id: 5,
    name: "You've received a payment.",
    time: '8 hours ago',
    description: "A list of new leads has been added to your dashboard",
    avatar: '/icons/notification2.png',
  },

];


export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notification' | 'roles'>('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3  bg-gray-100 dark:bg-gray-700 overflow-x-auto">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            className="block lg:hidden text-gray-600 dark:text-gray-300"

          >
            <FiMenu size={20} />
          </button>
          <div className=" flex justify-between items-center dark:border-gray-700">
            <h1 className={`text-xl sm:text-2xl font-bold dark:text-white truncate ${walsheim_bold.className}`}>
              ETERNITY LABS
            </h1>
            <button
              className="block lg:hidden text-gray-600 dark:text-gray-300"

            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        {/* Center Section */}
        {/* Right Section */}
        <div className="flex items-center  space-x-2 sm:space-x-4 flex-shrink-0">



          {/* Search Bar - Moved before Dark Mode Toggle */}
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md hidden sm:block">
            <FiSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 text-xs sm:text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-purple-200 dark:focus:ring-purple-700"
            />
          </div>

          {/* Dark Mode Toggle */}
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
                <FiMoon className="text-gray-800 dark:text-gray-800 text-xs sm:text-sm" />
              ) : (
                <FiSun className="text-yellow-500 text-xs sm:text-sm" />
              )}
            </div>
          </div>


          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <IconButton variant="text" placeholder="">
                <Image
                  src={isDarkMode ? "/icons/notification-icon-dark.svg" : "/icons/notification-icon.svg"}
                  alt="Notifications"
                  className="w-5 h-5"
                />
              </IconButton>
            </MenuHandler>
            <MenuList
              className="flex flex-col sm:w-4/12 bg-white dark:bg-black sm:-ml-32  "
              placeholder=""
            >
              {notifications.map(
                (notification: {
                  description: ReactNode;
                  id: React.Key | null | undefined;
                  name:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                  | null
                  | undefined;
                  avatar: string | undefined;
                  time:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                  | null
                  | undefined;
                }) => (
                  <MenuItem
                    key={notification.id}
                    className="flex items-center gap-4 py-2 pl-2 pr-8"
                    placeholder=""
                  >
                    <Avatar
                      variant="circular"
                      alt={notification.name as string | undefined}
                      src={notification.avatar as string | undefined}
                      placeholder={undefined}
                    />
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="small"
                        color="gray"
                        placeholder=""
                        className={`text-black dark:text-white ${walsheim_medium.className}`}
                      >
                        {notification.name}
                        {"  "}{" "}
                        <span
                          className={`text-xs dark:text-gray-300 text-gray-500 ${walsheim_regular.className}`}
                        >
                          {notification.time}
                        </span>
                      </Typography>
                      <span
                        className={`text-gray-700 dark:text-white text-xs ${walsheim_light.className}`}
                      >
                        {notification.description}
                      </span>
                    </div>
                  </MenuItem>
                )
              )}
            </MenuList>
          </Menu>




          <div className="relative">

            {/* Profile Icon */}
            <div
              className="flex items-center space-x-1 sm:space-x-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setIsOpen(!isOpen);
              }}
            >
              <Image
                src="/prince.png"
                alt="John Walker"
                className="w-6 sm:w-8 h-6 sm:h-8 rounded-full"
              />
              <span
                className={`text-xs sm:text-sm text-black dark:text-white ${walsheim_medium.className}`}
              >
                John Walker
              </span>
              <span className="text-xs sm:text-sm text-black dark:text-white">
                <FiChevronDown />
              </span>
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                <h3 className="font-bold text-sm text-gray-800">Account</h3>
                <div className="flex items-center space-x-3 mt-2">
                  <Link href={"/profile"}>
                    <Image
                      src="/prince.png"
                      alt="John Walker"
                      className="w-10 h-10 rounded-full"
                    />
                  </Link>
                  <div>
                    <p
                      className={`font-semibold dark:text-black text-sm ${walsheim_medium.className}`}
                    >
                      John Walker
                    </p>
                    <p className={`text-sm text-black ${walsheim_regular.className}`}>
                      johnwalker@example.com
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <Link href={"/settings"}>
                    <button
                      className={`flex items-center justify-between w-full text-sm font-semibold text-gray-800 ${walsheim_regular.className}`}
                    >
                      Manage Account
                      <span className="text-lg">
                        <Image src="/icons/dd.png" alt="" />
                      </span>
                    </button>
                  </Link>
                  <button
                    className={`flex items-center justify-between w-full text-sm font-semibold text-red-600 ${walsheim_regular.className}`}
                  >
                    Log Out
                    <span className="text-lg">
                      <Image src="/icons/log-out.png" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            )}
            {isOpen && (
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              ></div>
            )}


          </div>
        </div>
      </nav>


      {/* Tabs */}
      <div className={`flex space-x-8 border-b border-gray-200  dark:border-gray-700 px-6 font-bold  ${walsheim_regular.className}`}>
        {['Profile', 'Notification',].map((tab) => (
          <button
            key={tab}
            className={cn(
              'py-3 px-4 text-sm font-medium',
              activeTab === tab.toLowerCase().replace(/ & /g, '-') && 'border-b-2 border-purple-500 text-purple-500'
            )}
            onClick={() => setActiveTab(tab.toLowerCase().replace(/ & /g, '-') as any)}
          >
            <span className={`text-base font-semibold ${walsheim_regular.className}`}>{tab}</span>
          </button>
        ))}
      </div>

      {/* Profile Section */}
      {activeTab === 'profile' && (
        <div className="flex flex-col items-center mt-10 px-6">
          <div className="w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center relative">
            <Image
              src="/icons/Settingslogo.png"
              alt="Martin Gupta"
              width={80}
              height={80}
              className="rounded-full border-4 border-white absolute bottom-0 left-40 transform translate-y-1/2"
            />
            <div className="flex flex-col items-center mt-20">
              <h2 className="text-lg font-semibold -mt-10">Eternity Labs</h2>
              <p className="text-gray-500 dark:text-gray-400">martin@eternitylabs.ai</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "notification" && (
        <div className="flex justify-end w-full">
          <NotificationManagement />
        </div>
      )}




    </div>
  );
}
