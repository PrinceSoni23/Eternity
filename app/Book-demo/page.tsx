"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { walsheim_bold } from "@/components/constants";
import { toast } from "react-hot-toast";
import {
    walsheim_regular,
    walsheim_thin,
} from "@/components/constants";

const HomePage = () => {
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

    const handleChange = (e: { target: { name: string; value: string; type: string; checked: boolean; }; }) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("http://localhost:8000/api/v1/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
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
            router.push("/auth/sign-in");
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
        <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">
            <div className="relative flex-1 hidden lg:block">
                <Image src="/signup.png" alt="Dashboard" layout="fill" objectFit="cover" />
            </div>

            <div className="w-px bg-gradient-to-b from-transparent via-white to-transparent shadow-md hidden lg:block" style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}></div>

            <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-md">
                    <h2 className={`text-2xl sm:text-3xl mb-2 font-bold ${walsheim_regular.className}`}>Book a demo</h2>
                    <p className={`text-base font-semibold mb-6 ${walsheim_thin.className}`}>Book a free session with our experts </p>
                    {errorMessage && <p className={`mb-4 text-center text-red-400 ${walsheim_thin.className}`}>{errorMessage}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col space-y-2"></div>
                        <input type="text" name="Name" placeholder="Name" className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />
                        <input type="text" name="Company-details" placeholder="Tell us about your company" className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B]" onChange={handleChange} required />
                        <input
                            type="datetime-local"
                            name="dateAndTime"
                            placeholder="Select the date and Time"
                            className="w-full px-4 py-2 bg-[#252237] border rounded-lg transition-all border-gray-400 placeholder-[#675B8B] text-white appearance-none relative pr-10"
                            onChange={handleChange}
                            required
                            style={{
                                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4-5h-1V4h-2v2H6V4H4v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 16H3V10h18v12z"/></svg>')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 40px center",
                                backgroundSize: "20px",
                            }}
                        />
                        <button type="submit" className={`w-full py-2 bg-[#9061FF] hover:bg-purple-700 rounded-lg text-gray-50 font-semibold ${walsheim_thin.className}`} disabled={loading}>
                            {loading ? "Scheduling..." : "Book a demo"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
