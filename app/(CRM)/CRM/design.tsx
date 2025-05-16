"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
    FiTrendingUp,
    FiSearch,
    FiSun,
    FiChevronDown,
    FiMoon,
    FiMenu,
    FiX,
} from "react-icons/fi";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {
    walsheim_bold,
    walsheim_light,
    walsheim_medium,
    walsheim_regular,
} from "@/components/constants";

import { notifications } from "./CRM_data";
// import { useRouter } from "next/compat/router";
import { usePathname } from "next/navigation";
import Image from "next/image";


interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    // const router = useRouter();
    // const currentRoute = router?.pathname || "";
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeContent, setActiveContent] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activePath, setActivePath] = useState<string>("");
    const pathname = usePathname(); // Get the current route

    // Update activePath whenever pathname changes (handles back gesture issue)
    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);


    // function setDropdownOpen(arg0: boolean) {
    //     throw new Error("Function not implemented.");
    // }

    return (
        <div
            className={`flex h-screen ${isDarkMode ? "bg-white" : "bg-white"
                } overflow-hidden`}
        >
            {/* Sidebar */}
            <aside
             className={`fixed lg:static z-30 w-64 bg-white dark:bg-gray-700 flex flex-col justify-between min-h-screen 
             transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
             transition-transform duration-300 lg:translate-x-0`}
           >
             <div>
               {/* Sidebar Header */}
               <div className="p-4 flex justify-between items-center dark:border-gray-700">
                 <h1
                   className={`text-xl sm:text-2xl font-bold dark:text-white truncate ${walsheim_bold.className}`}
                 >
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
                            {
                                key: "dashboard",
                                href: "/CRM",
                                iconLight: "/icons/CRMdash.svg",
                                iconDark: "/icons/CRMdash-dark.svg",
                                label: "Dashboard",
                            },
                            {
                                key: "Call-Details",
                                href: "/CRM/Call-Details",
                                iconLight: "/icons/Callicon.svg",
                                iconDark: "/icons/Callicon-dark.svg",
                                label: "Call Details",
                            },
                            {
                                key: "Messages",
                                href: "/CRM/Messages",
                                iconLight: "/icons/CRMmessage.svg",
                                iconDark: "/icons/message-dark.svg",
                                label: "Messages",
                            },
                            {
                                key: "Data-Entry",
                                href: "/CRM/Data-Entry",
                                iconLight: "/icons/CRMdata.svg",
                                iconDark: "/icons/data-dark.svg",
                                label: "Data Entry",
                            },
                            // { key: "Agent-info", href: "/CRM", icon: () => <img src="/icons/CRMagent.svg" />, label: "Agent Info" },
                            //   { key: "leads", href: "/dashboard", icon: () => <img src="/icons/Leadsicon.svg" />, label: "Leads" },
                            //   { key: "sources", href: "/dashboard", icon: () => <img src="/icons/Sourcesicon.svg" />, label: "Sources" },
                            //   { key: "performance", href: "/dashboard", icon: () => <img src="/icons/Performanceicon.svg" />, label: "Performance" },
                        ].map(({ key, href, iconLight, iconDark, label }) => (
                            <li key={key}>
                                <Link
                                    href={href}
                                    className={`flex mr-6 items-center px-3 sm:px-4 py-2 sm:py-3 text-black rounded dark:text-gray-200 
                                        ${activePath === href
                                            ? "bg-[#EFE5FE] text-[#6F00DE] dark:bg-gray-800"
                                            : "hover:bg-[#f8f5fc] dark:hover:bg-gray-600"
                                        }`}

                                    onClick={() => setActiveContent(key)}
                                >
                                    <Image
                                        src={isDarkMode ? iconDark : iconLight}
                                        className="mr-2 sm:mr-3 text-sm sm:text-base"
                                        alt={label}
                                        width={20} // Replace with the correct width
                                        height={20}
                                    />
                                    <span
                                        className={`text-sm ml-2 sm:text-base ${walsheim_medium.className}`}
                                    >
                                        {label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                </div>
                <div className="p-3 sm:p-4">
    <Link
      href="/Owner_Settings"
      className={`flex items-center px-3 ml-1 sm:px-4 py-2 sm:py-3 text-black rounded dark:text-gray-200
      ${activeContent === "settings" ? "bg-[#EFE5FE] text-[#6F00DE] dark:bg-gray-800" : "hover:bg-[#f8f5fc] dark:hover:bg-gray-600"}`}
      onClick={() => setActiveContent("settings")}
    >
     <Image
    src="/icons/settingsicon.svg" 
    className="mr-2 sm:mr-3 text-sm sm:text-base dark:hidden" 
    alt="Settings" 
    width={20} // Replace with the correct width
    height={20}
  />

  {/* Dark Mode Icon */}
  <Image
    src="/icons/settingsicon-dark.svg" 
    className="mr-2 sm:mr-3 text-sm sm:text-base hidden dark:block" 
    alt="Settings (Dark Mode)" 
    width={20} // Replace with the correct width
    height={20}
  />
      <span className={`text-sm sm:text-base ${walsheim_medium.className}`}>
        Settings
      </span>
    </Link>
  </div>
</aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col p-0 overflow-hidden dark:bg-gray-700">
                {/* Top Navigation */}
                <header className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3  bg-white dark:bg-gray-700 overflow-x-auto">
                    {/* Left Section */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <button
                            className="block lg:hidden text-gray-600 dark:text-gray-300"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <FiMenu size={20} />
                        </button>
                        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-300 dark:border-white hover:text-gray-800 dark:hover:text-gray-100 border rounded-lg px-2 py-1 text-xs sm:text-sm">
                            <span className={`${walsheim_medium.className}`}>Lead</span>
                            <FiChevronDown />
                        </button>
                        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-white dark:border-white hover:text-gray-800 border rounded-lg px-2 sm:px-3 py-[6px] text-xs sm:text-sm">
                            <FiTrendingUp className="text-sm sm:text-base" />
                            <FiChevronDown className="text-gray-600 dark:text-white" />
                        </button>
                        <button className="text-gray-600 dark:text-white  dark:border-white hover:text-gray-800 border text-center rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm">
                            ...
                        </button>
                    </div>

                    {/* Center Section */}
                    {/* Center Section */}
                    {/* Right Section */}
                    <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                        {/* Search Bar - Moved before Dark Mode Toggle */}
                        <div className="relative max-w-xs sm:max-w-sm md:max-w-md hidden sm:block">
                            <FiSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 text-xs sm:text-sm" />
                            <input
                                type="text"
                                placeholder="Search"
                                className={`w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring focus:ring-purple-200 dark:focus:ring-purple-700 ${walsheim_medium.className}`}
                            />
                        </div>


                        {/* Right Section */}
                        <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                            <div
                                className={`w-10 sm:w-12 h-5 sm:h-6 flex items-center rounded-full p-1 cursor-pointer ${isDarkMode ? "bg-gray-800" : "bg-gray-200"
                                    }`}
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
                                    className={`w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center rounded-full bg-white shadow-md transform transition-transform ${isDarkMode
                                        ? "translate-x-5 sm:translate-x-6"
                                        : "translate-x-0"
                                        }`}
                                >
                                    {isDarkMode ? (
                                        <FiMoon className="text-gray-800 dark:text-gray-900 text-xs sm:text-sm" />
                                    ) : (
                                        <FiSun className="text-yellow-500 text-xs sm:text-sm" />
                                    )}
                                </div>
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
                                        width={20} // Replace with the correct width
                                        height={20}
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
                                            string | React.JSXElementConstructor<unknown>
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
                                                string | React.JSXElementConstructor<unknown>
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
                                            string | React.JSXElementConstructor<unknown>
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
                                                string | React.JSXElementConstructor<unknown>
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
                                    width={20} // Replace with the correct width
                                    height={20}
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
                                                width={20} // Replace with the correct width
                                                height={20}
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
                                                    <Image src="/icons/dd.png" alt="" width={20} height = {20}  />
                                                </span>
                                            </button>
                                        </Link>
                                        <button
                                            className={`flex items-center justify-between w-full text-sm font-semibold text-red-600 ${walsheim_regular.className}`}
                                        >
                                            Log Out
                                            <span className="text-lg">
                                                <Image src="/icons/log-out.png" alt="" width={20} height = {20} />
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
                </header>

                {/* Main Area */}
                <main className="flex-1 p-3 sm:p-4 md:p-5 bg-[#EFE5FE] md:rounded-tl-3xl dark:bg-gray-800 overflow-auto">
                    {/* Dynamic Content Based on Active Content */}
                    {children}
                    {/* {activeContent === "dashboard" && (
                        <>
                            <div className="grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3">
                                <Chart3 title="Your Average Score" totalRevenue={"73.28"} percentageChange="+20.23" strokeColor="#2E47F9" data={CData} />
                                <RevenueCard data={visitorData} />
                                <Chart2 />
                            </div>
                            <div className="w-full h-auto mt-4">
                                <Table1 callData={callData} messageData={messageData} />
                            </div>
                        </>
                    )}
                    {activeContent === "Call-Details" && (
                        <>
                            <DynamicTable headings={tableHeadings} data={tableData} />
                        </>
                    )}
                    {activeContent === "Messages" && (
                        <>
                            <DynamicTable headings={tableHeadings2} data={tableData2} />
                        </>
                    )}
                    {activeContent === "Data-Entry" && (

                        <DataEntry />


                    )} */}
                    {/* {activeContent === "Agent-Info" && (
            <>




            </>
          )} */}

                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
