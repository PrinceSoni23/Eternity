"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  walsheim_regular,
  walsheim_thin,
} from "@/components/constants";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError({ ...error, [name]: "" }); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError({ email: "", password: "" });

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const cookies = document.cookie.split('; ').reduce((acc: { [key: string]: string }, cookie) => {
        const [key, value] = cookie.split('=');
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});

      console.log('Cookies in readable format:', cookies);

      const data = await response.json();

      if (!response.ok) {
        if (data.message.includes("Incorrect password")) {
          setError((prev) => ({ ...prev, password: "Incorrect password" }));
        } else if (data.message.includes("Account does not exist")) {
          setError((prev) => ({ ...prev, email: "Account not found. " }));
        } else {
          throw new Error(data.message || "Login failed");
        }
        return;
      }

      toast.success("Login successful!");
      router.push("/registration/company_registration");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
      <div className="relative flex-1 hidden lg:block">
        <Image src="/signup.png" alt="Dashboard" layout="fill" objectFit="cover" />
      </div>
      <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-white to-transparent shadow-md" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}></div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className={`text-3xl mb-2 font-bold ${walsheim_regular.className}`}>Reset Password</h2>
          <p className="text-base mb-6">
          Enter your new password below <a href="/auth/sign-up" className={`text-purple-400 ${walsheim_thin.className}`} ></a>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <input
                type="password"
                name="password"
                placeholder="Enter New password"
                className="w-full px-4 py-2 bg-[#252237] border border-gray-400 rounded-lg autofill-fix placeholder-[#675B8B]"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password again"
                className="w-full px-4 py-2 bg-[#252237] border border-gray-400 rounded-lg autofill-fix placeholder-[#675B8B]"
                onChange={handleChange}
                required
              />
            </div>


            <button type="submit" className={`w-full py-2  bg-[#9061FF] hover:bg-purple-700 rounded-lg text-white font-bold ${walsheim_thin.className}`} disabled={loading}>
              {loading ? "Processing..." : "Change Password"}
            </button>
          </form>



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
  );
};

export default Page;
