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
//----------- REDUX GTM -----------------
import { useDispatch } from 'react-redux';
import { setUserData } from "@/lib/store/features/auth/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(""); // New state for password validation
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: { target: { name: string; value: string; type: string; checked: boolean; }; }) => {
    const { name, value, type, checked } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Validate password length
    if (name === "password") {
      if (value.length > 0 && value.length < 8) {
        setPasswordError("Password must be at least 8 characters long.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // Prevent submission if password is too short
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials : "include",
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Signup failed");
      }

      toast.success("Signup successful!");
      if(response.ok)
      {
        dispatch(setUserData({
          user: result?.user,
          accessToken: result?.accessToken,
          refreshToken: result?.refreshToken,
        }));

        localStorage.setItem("user", JSON.stringify(result?.user));
        localStorage.setItem("USER_ID", JSON.stringify(result?.user?.id));
      }
      
      router.push(`/user-resend-email/${result?.user?.id}`);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
        <div className="relative flex-1 hidden lg:block">
          <Image src="/signup.png" alt="Dashboard" layout="fill" objectFit="cover" />
        </div>

        <div className="w-px bg-gradient-to-b from-transparent via-white to-transparent shadow-md hidden lg:block" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}></div>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md">
            <h2 className={`text-2xl sm:text-3xl mb-2 font-bold ${walsheim_regular.className}`}>Create an account</h2>
            <p className={`text-base font-semibold mb-6 ${walsheim_thin.className}`}>Already have an account? <a href="/auth/sign-in" className="text-purple-400">Log in</a></p>
            {errorMessage && <p className={`mb-4 text-center text-red-400 ${walsheim_thin.className}`}>{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input type="text" name="firstName" placeholder="First Name" className="flex-1 px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" className="flex-1 px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />
              </div>

              <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B] pr-10"
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

                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <div className="flex items-center">
                <input type="checkbox" name="agree" className="w-4 h-4 text-[#9B48ED]" onChange={handleChange} required />
                <label className={`ml-2 text-base font-semibold ${walsheim_thin.className}`}>I agree to the <a href="/terms" className="text-purple-400 underline">Terms & Conditions</a></label>
              </div>

              <button type="submit" className={`w-full py-2 bg-[#9061FF] hover:bg-purple-700 rounded-lg text-gray-50 font-semibold ${walsheim_thin.className}`} disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="mx-4 text-gray-400 text-sm">OR REGISTER WITH</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                onClick={() => window.location.href = "http://localhost:8000/api/v1/auth/google"}
                className="w-full flex items-center justify-center py-2 border rounded-lg bg-black border-white hover:bg-gray-800 transition">
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
      </div>
    </>
  );
};

export default HomePage;
