"use client";
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { walsheim_bold, walsheim_medium } from "@/components/constants";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface CompanyDetailsProps {
    companyID?: string;
}
// console.log("Company Details component");
const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyID }) => {
    const router = useRouter();
    console.log('CompanyDetails component , compnay ID : ' , companyID, typeof companyID);

    const [formData, setFormData] = useState({
        subDomain: "",
        targetCustomer: "",
        uniqueSellingPoint: "",
    });

    const [apiUrl, setApiUrl] = useState("");
    interface Product {
        product_name: string;
        product_price: number;
        discounted_price: number;
        product_domain: string;
    }

    const [products, setProducts] = useState<Product | null>({
        product_name: 'Sample Product',
        product_price: 200,
        discounted_price: 50,
        product_domain: 'E-commerce'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const fetchProducts = async () => {
        if (!apiUrl) {
            setError("Please enter a valid API URL");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!response.ok) {
                toast.error(data?.message || "Failed to fetch products.");
                throw new Error(data?.message || "Failed to fetch products.");
            }
            setProducts(data);
            toast.success(`Products fetched successfully.`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to fetch products");
            setProducts(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
         console.log("Company Details:", formData);
         console.log("Primary Products:", products);
         

        
        try{
            const response = await fetch(`http://localhost:8000/api/v1/companies/add-company-detail/${companyID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    subDomain : formData?.subDomain,
                    targetCustomer : formData?.targetCustomer,
                    uniqueSellingPoint : formData?.uniqueSellingPoint,                    
                    primaryProducts: [apiUrl]
                })
            })
        
            if (!response.ok) {
                const errorData = await response.json();
                console.log("Error data - " , errorData)
                throw new Error(errorData?.message || "Company details submission failed.");
            }

            const data = await response.json();
            console.log("Company details submission data:", data);
            toast.success(data?.message || "Company details submitted successfully.");
            router.push(`/dashboard?ID=${data?.company?.owner}`)


        } catch(err ){
            console.error("Error in submitting company details:", err instanceof Error ? err.message : "Unknown error");
            toast.error(err instanceof Error ? err.message : "Failed to submit company details");
        }
       
    };



    // const productData = {
    //     product_name: 'Sample Product',
    //     product_price: 200,
    //     discounted_price: 50,
    //     product_domain: 'E-commerce'
    // };

    return (<>
        <Toaster />
        <div className="container mx-auto p-4 sm:max-w-3xl">
            <div className="mb-4 sm:mb-6">
                <h3 className={`${walsheim_bold.className} mb-2 text-sm sm:text-base`}>Domain Of Company</h3>
                <textarea
                    placeholder="What is your company about and what are the products?"
                    className={`w-full p-2 text-sm sm:text-base border border-black rounded-lg h-11 placeholder-gray-500 ${walsheim_medium.className} placeholder:${walsheim_bold.className}`}
                    name="subDomain"
                    value={formData?.subDomain}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4 sm:mb-6">
                <p className={`${walsheim_bold.className} mb-2 text-sm sm:text-base`}>Target Customers</p>
                <textarea
                    placeholder="Who are your target customers?"
                    className={`w-full p-2 text-sm sm:text-base border border-black rounded-lg h-11 placeholder-gray-500 ${walsheim_medium.className} placeholder:${walsheim_bold.className}`}
                    name="targetCustomer"
                    value={formData?.targetCustomer}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4 sm:mb-6">
                <p className={`${walsheim_bold.className} mb-2 text-sm sm:text-base`}>Unique Selling Point</p>
                <textarea
                    placeholder="What is your Products’ Unique Selling Point?"
                    className={`w-full p-2 text-sm sm:text-base border border-black rounded-lg h-11 placeholder-gray-500 ${walsheim_medium.className} placeholder:${walsheim_bold.className}`}
                    name="uniqueSellingPoint"
                    value={formData?.uniqueSellingPoint}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4 sm:mb-6">
                <p className={`${walsheim_bold.className} mb-2 text-sm sm:text-base`}>Primary Products</p>
                <div className="relative w-full">
                    <Input
                        type="text"
                        placeholder="Enter API URL for company's products"
                        value={apiUrl}
                        onChange={(e) => setApiUrl(e.target.value)}
                        className={`w-full p-2 text-sm sm:text-base border border-black rounded-lg h-11 placeholder-gray-500 ${walsheim_medium.className} placeholder:${walsheim_bold.className} placeholder:text-[16px]`}
                    />
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 w-8 h-8 sm:w-10 sm:h-10"
                        onClick={fetchProducts}
                        disabled={loading}
                    >
                        <RotateCw className={`w-4 h-4 sm:w-5 sm:h-5 ${loading ? "animate-spin" : ""}`} />
                    </Button>
                </div>
            </div>
            {error && (
                <div className="mb-4 text-red-500 text-sm">
                    {error}
                </div>
            )}
            <div className="border rounded-xl max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-2xl px-3 sm:px-5 py-3 bg-gray-100 overflow-auto">
                {products ? (
                    <SyntaxHighlighter
                        language="javascript"
                        style={dracula}
                        customStyle={{
                            borderRadius: "10px",
                            fontSize: '0.75rem',
                            lineHeight: '1.2',
                            width: '100%',
                        }}
                    >
                        {JSON.stringify(products, null, 2)}
                    </SyntaxHighlighter>
                ) : (
                    <div className="text-gray-500 text-sm">
                        {loading ? "Fetching products..." : "No products data to display"}
                    </div>
                )}
            </div>


<div className="w-full flex justify-center items-center">
<button
                className="w-3/4 bg-purple-500 font-semibold text-white px-6 py-3 rounded-lg mt-4 hover:shadow-lg  duration-300 hover:bg-purple-600"
                type='submit'
                onClick={handleSubmit}
            >
                Submit
            </button>
</div>
            

        </div>
    </>
    );
};
export default CompanyDetails;