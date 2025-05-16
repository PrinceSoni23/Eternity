"use client";
import React, { useState } from "react";
import { walsheim_bold } from "@/components/constants";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";

const industries = [
    { name: "E-Commerce", icon: "/icons/domains/ecommerce.png" },
    { name: "Real Estate", icon: "/icons/domains/real_estate.png" },
    { name: "Healthcare", icon: "/icons/domains/healthcare.png" },
    { name: "Banking & Finance", icon: "/icons/domains/finance.png" },
    { name: "SaaS Application", icon: "/icons/domains/saas.png" },
    { name: "Travel & Hospitality", icon: "/icons/domains/travel.png" },
    { name: "HoReCa", icon: "/icons/domains/horeca.png" },
    { name: "Insurance", icon: "/icons/domains/insurance.png" },
    { name: "Education & Training", icon: "/icons/domains/education.png" },
    { name: "Media & Entertainment", icon: "/icons/domains/media.png" },
    { name: "Service Providers", icon: "/icons/domains/service_provider.png" },
    { name: "Others", icon: "/icons/domains/others.png" }
];

interface IndustryGridProps {
    companyID?: string;
}

const IndustryGrid: React.FC<IndustryGridProps> = ({ companyID }) => {
    const router = useRouter();
    const [active, setActive] = useState<number>();

    const handleCreateClick = async (industryName: string) => {
        console.log('Domain:', industryName);

        try {
            const response = await fetch(`http://localhost:8000/api/v1/companies/add-company-domain/${companyID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization" : "Bearer" + token;
                },
                credentials: "include",
                body: JSON.stringify({ domain: industryName }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log("Error data - ", errorData);
                throw new Error(errorData?.message || "Domain selection failed.");
            }

            const data = await response.json();
            console.log("Fetched domain data:", data);

            if (data?.message === "Domain added successfully") {
                toast.success(data?.message || "Domain added successfully.");
                router.push(`/registration/company_details/${data?.updatedCompany?._id}`);
            }
        } catch (error) {
            console.error("Error in selecting domain:", error instanceof Error ? error.message : "Unknown error");
            toast.error(error instanceof Error ? error.message : "Domain selection failed");
            return;
        }
    };

    return (
        <>
            <Toaster />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 mx-auto">
                {industries.map((industry, index) => (
                    <button
                        key={index}
                        className={`flex items-center justify-start gap-x-6 px-6 py-2 border rounded-xl shadow-sm bg-white hover:shadow-xl transition duration-300 ease-in-out ${active === index && ' border-purple-500'}`}
                        onClick={() => { setActive(index); handleCreateClick(industry.name); }}
                    >
                        <Image
                            src={industry.icon}
                            alt={industry.name}
                            className="w-12 h-12 object-cover"
                        />
                        <span className={`${walsheim_bold.className} text-lg font-medium`}>
                            {industry.name}
                        </span>
                    </button>
                ))}
            </div>
        </>
    );
};

export default IndustryGrid;
