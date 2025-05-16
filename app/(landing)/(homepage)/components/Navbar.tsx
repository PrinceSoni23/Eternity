"use client"
import { walsheim_bold, walsheim_regular } from "@/components/constants";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store';
// import Link from "@/components/markdown/link";
// import { getUser } from "@/utilities/getUser";



const Navbar = () => {
  // console.log('Cookies ; ', document.cookie)  
  const userData = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const useridFromLocalStorage = localStorage.getItem("USER_ID")?.slice(1, -1)
  const userID = userData?.user?.id || useridFromLocalStorage;
  console.log('userID from localStorage: ', useridFromLocalStorage)
  console.log('userID from Redux: ', userData?.user?.id)
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Smooth Scroll Handler
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`w-screen fixed top-0 left-0 flex justify-between items-center px-4 sm:px-10 py-3 text-white z-50 shadow-md transition-all duration-300 ${isScrolled
        ? "backdrop-filter backdrop-blur-lg bg-opacity-50 bg-black border-b border-gray-800"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <Link href="/">
        <div className={`text-2xl ${walsheim_bold.className}`}>
          ETERNITY LABS
        </div>
      </Link>
      <div
        className={`hidden md:flex md:gap-8 text-base ${walsheim_regular.className}`}
      >
        <a href="/about-us" className="hover:text-gray-400">
          About us
        </a>
        <button onClick={() => handleSmoothScroll("sticky")} className="hover:text-gray-400">
          Features
        </button>
        <button onClick={() => handleSmoothScroll("ED")} className="hover:text-gray-400">
          Solution
        </button>
        <button onClick={() => handleSmoothScroll("blogs")} className="hover:text-gray-400">
          Blogs
        </button>
        <button onClick={() => handleSmoothScroll("faq")} className="hover:text-gray-400">
          FAQs
        </button>
      </div>
      <div
        className="hidden md:block"
        onClick={() => router?.push(userID
          // ? `/dashboard?ID=${userID}`
          ? `/dashboard`
          : '/auth/sign-in')}
        // onClick={() => router?.push(activeUser && Object.keys(activeUser || {}).length > 0
        //   ? `/dashboard?ID=${activeUser?.id}`
        //   : '/auth/sign-in')}

      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black text-white dark:text-white flex items-center space-x-2"
        >

          <h1 className={`text-white ${walsheim_bold.className}`}>
            {userID ? 'Dashboard' : 'Sign-In'}
            {/* {(activeUser && Object.keys(activeUser || {}).length > 0) ? 'Dashboard' : 'Sign-In'} */}


          </h1>
        </HoverBorderGradient>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-4 text-sm py-4 z-50 bg-black bg-opacity-90">
          <a href="/about-us" className="hover:text-gray-400">
            About us
          </a>
          <button onClick={() => handleSmoothScroll("sticky")} className="hover:text-gray-400">
            Features
          </button>
          <button onClick={() => handleSmoothScroll("ED")} className="hover:text-gray-400">
            Solution
          </button>
          <button onClick={() => handleSmoothScroll("blogs")} className="hover:text-gray-400">
            Blogs
          </button>
          <button onClick={() => handleSmoothScroll("faq")} className="hover:text-gray-400">
            FAQs
          </button>
          <div className="mt-4">
            <ShimmerButton>
              <h1 className={`text-white ${walsheim_bold.className}`}>
                Book Demo
              </h1>
            </ShimmerButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
