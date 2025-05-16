"use client";

import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { walsheim_regular, walsheim_thin } from "@/components/constants";
// import loading from "../loading";

function ForgotPassword() {
  const { handleSubmit, formState: { errors } } = useForm<{ email: string }>();
  const [, setMessage] = useState("");
  const [errorMessage] = useState("");

  const onSubmit = async (data: { email: string }) => {
    // Simulate API call
    setMessage(`Password reset link sent to ${data.email}`);
  };


    function handleChange(_event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      <div className="relative flex-1 hidden lg:block">
        <Image width={500} src="/signup.png" alt="Dashboard" layout="fill" objectFit="cover" />
      </div>

      <div className="w-px bg-gradient-to-b from-transparent via-white to-transparent shadow-md hidden lg:block" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}></div>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <h2 className={`text-2xl sm:text-3xl mb-2 font-bold ${walsheim_regular.className}`}> Forgot Password?</h2>
          <p className={`text-base font-semibold mb-6 ${walsheim_thin.className}`}> Enter your email to receive a password reset link. </p>
          {errorMessage && <p className={`mb-4 text-center text-red-400 ${walsheim_thin.className}`}>{errorMessage}</p>}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />
           
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
         <button type="submit" className={`w-full py-2 bg-[#9061FF] hover:bg-purple-700 rounded-lg text-gray-50 font-semibold ${walsheim_thin.className}`}>
               Send Reset Link
            </button>
        </form>
        <div className="text-center mt-4">
          <a href="/login" className="text-white underline  text-md">
            Back to Login
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
