"use client";

import React, { useState } from "react";
import {
    walsheim_medium,
    walsheim_medium_bold
} from "@/components/constants";
import { useRouter } from "next/navigation";
import {getUser} from "@/utilities/getUser"
// import Cookies from "js-cookie";


function Page() {
    const [formData, setFormData] = useState({
        type: "company",
        name: "",
        ownerName: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e: { target: { name: string; value: string } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateClick = async () => {
        setLoading(true);
        setError("");
    
        console.log("Sending data to backend:", formData);
    
        try {
            const response = await fetch("http://localhost:8000/api/v1/companies/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Ensure cookies are included
                body: JSON.stringify(formData),
            });
    
            // console.log("Response Status:", response.status);
            // console.log("Response Headers:", response.headers);
            const responseText = await response.text();
            // console.log("Response Body (Raw Text):", responseText);
    
            let data;
            try {
                data = JSON.parse(responseText); // Manually parse the response
            } catch (jsonError) {
                console.error("Invalid JSON Response:", jsonError);
                throw new Error("Server returned an invalid response.");
            }
    
            console.log("Server Response (Parsed):", data);
    
            if (!response.ok) {
                throw new Error(data?.message || "An unexpected error occurred. Please try again.");
            }
    
            // console.log("Company Data:", data?.company);
             console.log(" Owner ID:", data?.company?.owner , typeof data?.company?.owner);
            const companyOwner = await getUser(data?.company?.owner);
            // console.log("Company Owner:", companyOwner);

            companyOwner?.email === data?.company?.email 
            ? router.push(`/registration/domain_selection/${data?.company?._id}`) 
             : router.push(`/registration/validate_email?email=${data?.company?.email}`);
            // : router.push(`/registration/validate_email`);

        } catch (err) {
            console.error("Request Error:", err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 text-center">
            <h1 className={`text-3xl font-bold ${walsheim_medium_bold.className}`}>ETERNITY LABS</h1>
            <p className={`${walsheim_medium.className} text-gray-600 font-semibold mt-1`}>
                Create Your Company Profile
            </p>

            <div className="mt-4 text-left">
                <label className={`${walsheim_medium.className}`}>Company Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                />
            </div>
            <div className="mt-3 text-left">
                <label className={`${walsheim_medium.className}`}>Owner Name</label>
                <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Enter Owner Name"
                    className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                />
            </div>
            <div className="mt-3 text-left">
                <label className={`${walsheim_medium.className}`}>Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                />
            </div>


            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

            <button
                className="mt-4 w-full bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200 disabled:opacity-50"
                onClick={handleCreateClick}
                disabled={loading}
            >
                {loading ? "Creating..." : "Create Company"}
            </button>
        </div>
    );
}

export default Page;
