"use client";

import React from "react";
import { walsheim_bold, walsheim_medium } from "@/components/constants";
import IndustryGrid from "../../components/domains_grid";
import { useParams } from "next/navigation";

function Page() {
    const { companyID } = useParams() as { companyID?: string };
    const companyIdString = Array.isArray(companyID) ? companyID[0] : companyID || "";

    console.log("Company ID: ", companyIdString, typeof companyIdString);

    return (
        <div className="flex flex-col mt-5 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className={`${walsheim_bold.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
                    Select the domain of your company
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-4">
                <h2 className={`${walsheim_medium.className} text-base sm:text-lg md:text-xl text-gray-600`}>
                    This is to customize the AI functionalities according to your company
                </h2>
            </div>
            <div className="mt-6">
                <IndustryGrid companyID={companyIdString} />
            </div>
        </div>
    );
}

export default Page;
