"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import {
  walsheim_regular,
  walsheim_thin,
} from "@/components/constants";
import { getCompany } from "@/utilities/getCompany";
//------------- REDUX GTM ---------------
import { useDispatch } from 'react-redux';
import {  setUserData } from '@/lib/store/features/auth/userSlice';

const SignInPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });
  const [generalError, setGeneralError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [company, setCompany] = useState<{ _id?: string; registrationStep?: number } | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    // For checkboxes, use the checked value instead of the string value
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
    // Clear specific and general errors on input change
    setError({ ...error, [name]: "" });
    setGeneralError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError({ email: "", password: "" });
    setGeneralError("");

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      let data;
      let companyData;
      try {
        data = await response.json();
      } catch (error) {
        throw new Error("Unexpected server response.");
      }
      // console.log(data.message);
      // console.log('Sign in data - ', data);


      if (!response.ok) {
        if (data.message.includes("Invalid credentials")) {
          toast.error("Invalid credentials");
          setError((prev) => ({ ...prev, password: "Incorrect password" }));
        } else if (data.message.includes("User not found")) {
          toast.error("User not found");
          setError((prev) => ({ ...prev, email: "User not found" }));
        } else if (data.message.includes("Maximum login sessions reached")) {
          toast.error("Maximum login sessions reached. Please log out from another device first.");
          setError((prev) => ({ ...prev }));
        } else {
          toast.error(data.message || "Login failed.");
          setGeneralError(data.message || "Login failed.");
        }
        return;
      }
     
      if (data?.user?.company) {

         companyData = await getCompany(data?.user?.company);
        setCompany(companyData);
        // console.log("Company : ", companyData);
        console.log("registrationStep : ", companyData?.registrationStep, typeof companyData?.registrationStep);
      };

      if (response.ok) {
        dispatch(
          setUserData({
            user: data?.user,
            accessToken: data?.accessToken,
            refreshToken: data?.refreshToken,
            // company: companyData ? companyData : null,  
          })
        );

        // localStorage.setItem("user", JSON.stringify(data?.user));
        // localStorage.setItem("accessToken", JSON.stringify(data?.accessToken));
        // localStorage.setItem("refreshToken", JSON.stringify(data?.refreshToken));
        localStorage.setItem("COMPANY_ID", JSON.stringify(data?.user?.company));
        localStorage.setItem("USER_ID", JSON.stringify(data?.user?.id));
        
      }

      if(company){
      // console.log("[state] Company : ", company);
      // console.log("[state] Company id : ", company?._id);
    }


      toast.success("Login successful!");

      if (data?.user?.isVerified) {
        if (!data?.user?.company || data?.user?.company === null) {
          router.push(`/registration/company_registration`)
        } else {
          const registrationStep = companyData?.registrationStep;
          console.log("companyData registrationStep : ", registrationStep);
          registrationStep === 1
            ? router.push(`/registration/domain_selection/${companyData?._id}`)
            : registrationStep === 2
              ? router.push(`/registration/company_details/${companyData?._id}`)
              : router.push(`/dashboard?ID=${data?.user?.id}`);
        }
      } else {
        router.push(`/user-resend-email/${data?.user?.id}`);
      }

    } catch (error) {
      if (error instanceof Error) {
        setGeneralError(error.message);
      } else {
        setGeneralError("An unexpected error occurred.");
      }
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <><Toaster />
      <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
        <div className="relative flex-1 hidden lg:block">
          <Image src="/signup.png" alt="Dashboard" layout="fill" objectFit="cover" />
        </div>
        <div
          className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white to-transparent shadow-md"
          style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
        ></div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className={`text-3xl mb-2 font-bold ${walsheim_regular.className}`}>
              Login into your account
            </h2>
            <p className="text-base mb-6">
              Don’t have an account yet?{" "}
              <a href="/auth/sign-up" className={`text-purple-400 ${walsheim_thin.className}`}>
                Sign Up
              </a>
            </p>

            {/* General error message banner */}
            {generalError && (
              <div className="mb-4 p-2 bg-red-600 text-white rounded">
                {generalError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={`w-full px-4 py-2 bg-[#252237] border ${error.email ? "border-red-500" : "border-gray-400"
                    } rounded-lg autofill-fix placeholder-[#675B8B]`}
                  onChange={handleChange}
                  required
                />
                {error.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {error.email}
                    <a
                      href="/auth/sign-up"
                      className={`text-purple-400 ml-1 ${walsheim_thin.className}`}
                    >
                      Create Account
                    </a>
                  </p>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 bg-[#252237] border ${error.password ? "border-red-500" : "border-gray-400"
                    } rounded-lg autofill-fix placeholder-[#675B8B] pr-10`}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {error.password && (
                  <p className={`text-red-500 text-sm mt-1 ${walsheim_thin.className}`}>
                    {error.password}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agree"
                  className="w-4 h-4 mb-3 text-[#9B48ED]"
                  onChange={handleChange}
                  required
                />
                <label className={`ml-2 mb-3 text-base ${walsheim_thin.className}`}>
                  I agree to the{" "}
                  <a href="/terms" className="text-purple-400 underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-2 bg-[#9061FF] hover:bg-purple-700 rounded-lg text-white font-bold ${walsheim_thin.className}`}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Separator Line */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="mx-4 text-gray-400 text-sm">OR REGISTER WITH</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            {/* Social Sign-In Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                onClick={() =>
                  (window.location.href = "http://localhost:8000/api/v1/auth/google")
                }
                className="w-full flex items-center justify-center py-2 border rounded-lg bg-black border-white hover:bg-gray-800 transition"
              >
                <Image src="/icons/Google.svg" alt="Google" width={20} height={20} className="mr-2" />
                Google
              </button>
              <button className="w-full flex items-center justify-center py-2 border rounded-lg bg-black border-white hover:bg-gray-800 transition">
                <Image src="/icons/Apple.svg" alt="Apple" width={20} height={20} className="mr-2" />
                Apple
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
        .autofill-fix:-webkit-autofill {
          background-color: transparent !important;
          -webkit-box-shadow: 0 0 0px 1000px #252237 inset !important;
          -webkit-text-fill-color: white !important;
        }
      `}</style>
      </div>
    </>
  );
};

export default SignInPage;
