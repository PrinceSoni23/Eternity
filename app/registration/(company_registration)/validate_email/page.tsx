"use client";

import React, { useState } from "react";
import {
  walsheim_medium,
  walsheim_bold,
  walsheim_medium_bold,
} from "@/components/constants";
// import router from "next/router";
import { useSearchParams } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";


function Page() {
   const searchParams = useSearchParams();
   const company_email = searchParams.get("email");

  // const [formData, setFormData] = useState({
  //   companyName: "",
  //   ownerName: "",
  //   email: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleClick = async () => {
    //resend email
    try{
      const response = await fetch("http://localhost:8000/api/v1/companies/resend-verification-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({
          email  : company_email,
          type : "company"
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


    }catch(error ){
      console.error("Error in resending email:", error instanceof Error ? error.message : "Unknown error");
      toast.error(error instanceof Error ? error.message : "Email resending failed");

    }
    console.log("Button clicked!");
    // router.push("/company_registration");
  };

  return (
    <>
    <Toaster/>
    
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 text-center flex flex-col relative w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3">
      <h1 className={`text-3xl md:text-4xl font-bold ${walsheim_medium_bold.className} z-10`}>
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
      <p className={`${walsheim_medium.className} mt-4 text-xs sm:text-sm md:text-base z-10 px-4 md:px-6`}>
        An email has been sent to your account. Activate your account by verifying your email {" "}
        <span className={`${walsheim_bold.className}`}>{company_email ? company_email : 'COMPANY EMAIL'}</span>
      </p>
      <button
        className={`${walsheim_medium.className} mt-4 w-full bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200`}
        onClick={handleClick}
      >
        Resend Email
      </button>
    </div>
    </>
  );
}

export default Page;
