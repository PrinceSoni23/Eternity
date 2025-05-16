"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {useParams} from "next/navigation";
// import { walsheim_bold } from "@/components/constants";
import { toast, Toaster } from "react-hot-toast";
import {
  walsheim_bold,
  walsheim_medium,
  walsheim_medium_bold,
} from "@/components/constants";
// import router from "next/router";
import { getUser } from "@/utilities/getUser";

function Page() {
  const { userID } = useParams();
  interface User {
    email: string;
    [key: string]: any; // Adjust this based on the actual structure of the user object
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (userID) {
      getUser(userID as string).then(setUser);
    }
  }, [userID]);


    // const [formData, setFormData] = useState({
    //   companyName: "",
    //   ownerName: "",
    //   email: "",
    // });
  
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
  
    const handleClick = async () => {
        try{
          const response = await fetch("http://localhost:8000/api/v1/users/resend-verification-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", 
            body: JSON.stringify({
              email  : user?.email,
              type : "user"
            }),
          })
          
          if (!response.ok) {
            const errorData = await response.json();
            console.log("Error data - " , errorData)
            throw new Error(errorData?.message || "Email resending failed.");
          }
      
          const data = await response.json();
          console.log("Resend email data:", data);
      
          toast.success(data?.message || "Email re-sent successfully.");
    
    
        }catch(error){
          console.error("Error in resending email:", error instanceof Error ? error.message : "Unknown error");
          toast.error(error instanceof Error ? error.message : "Email resending failed");
    
        }
        // console.log("Button clicked!");
        // router.push("/company_registration");
      };
  
  return (
    <>
    <Toaster/>
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      <div className="relative flex-1 max-w-screen-sm hidden lg:block">
        <Image src="/signup.png" alt="Dashboard" layout="fill" objectFit="cover" />
      </div>

      <div className="w-px bg-gradient-to-b from-transparent via-white to-transparent shadow-md hidden lg:block" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}></div>

      {/* <div className="flex-1 flex items-center justify-center p-4 sm:p-8"> */}
        
      <div className="w-full max-w-screen-sm sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-auto my-auto bg-white rounded-3xl mt-10 shadow-lg p-6 text-center flex flex-col relative">

                <h1 className={`text-3xl md:text-4xl text-black font-bold ${walsheim_medium_bold.className} z-10`}>
                  ETERNITY LABS
                </h1>
                <p className={`${walsheim_medium.className} text-gray-600 font-semibold mt-2 z-10 text-sm md:text-base`}>
                  Verify email before setting up company
                </p>
                <div className="flex items-center justify-center flex-1 -mt-5 -mb-8 z-0 w-full">
                  <Image
                    src="/validate_email.jpg"
                    alt="Bottom Image"
                    className="w-40 sm:w-48 md:w-56 lg:w-64 object-cover"
                  />
                </div>
                <p className={`${walsheim_medium.className} mt-4 text-xs sm:text-sm text-black md:text-base z-10 px-4 md:px-6`}>
                  An email has been sent to your account. Activate your account by verifying your email. {" "}
                  <span className={`${walsheim_bold.className}`}></span>
                </p>
                <button
                  className={`${walsheim_medium.className} mt-4 w-full bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200`}
                  onClick={handleClick}
                >
                  Resend Email
                </button>
              </div>
         
        
      
    </div>
    </>
  );
};

export default Page;
