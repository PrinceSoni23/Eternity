"use client";

import React from "react";
import { walsheim_bold, walsheim_medium } from "@/components/constants";
import CompanyDetails from "@/app/registration/(company_creation)/components/company_detail";
import CustomDialog from "@/app/registration/(company_creation)/components/setting_up_dialog";
import { useParams } from "next/navigation";

interface Params {
    companyID?: string | string[];
}
// console.log("company_details page.tsx");
function Page() {
    // console.log("2nd company_details page.tsx");
    const { companyID } = useParams() as Params;
    // console.log("company_details page.tsx \nCompany ID: ", companyID , typeof companyID);
    const companyIdString = Array.isArray(companyID) ? companyID[0] : companyID || "";


    return (
        <div className="flex flex-col mt-5 px-0 sm:px-6 md:px-8 lg:px-16">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className={`${walsheim_bold.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
                    Enter the details of your company
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-4">
                <h2 className={`${walsheim_medium.className} text-base sm:text-lg md:text-xl text-gray-600`}>
                    This is to customize the AI functionalities according to your company
                </h2>
            </div>
            <div className="mt-6">
                <CompanyDetails companyID={companyIdString} />
                <button 
                    onClick={() => console.log("Company ID:", companyIdString)} 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Log Company ID
                </button>
            </div>
            <CustomDialog />
        </div>
    );
}

export default Page;

// "use client";

// import React from "react";
// import { walsheim_bold, walsheim_medium } from "@/components/constants";

// import CompanyDetails from "@/app/registration/(company_creation)/components/company_detail";
// import CustomDialog from '@/app/registration/(company_creation)/components/setting_up_dialog'
// import {useParams} from "next/navigation";

// function page() {
//     const { companyID } = useParams() as { companyID?: string };
//     const companyIdString = Array?.isArray(companyID) ? companyID[0] : companyID || "";
//     return (
//         <div className="flex flex-col mt-5 px-0 sm:px-6 md:px-8 lg:px-16">
//             <div className="flex flex-col items-center justify-center text-center">
//                 <h2 className={`${walsheim_bold.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
//                     Enter the details of your company
//                 </h2>
//             </div>
//             <div className="flex flex-col items-center justify-center text-center mt-4">
//                 <h2 className={`${walsheim_medium.className} text-base sm:text-lg md:text-xl text-gray-600`}>
//                     This is to customize the AI functionalities according to your company
//                 </h2>
//             </div>
//             <div className="mt-6">
//                 <CompanyDetails companyID={companyIdString} />
//             </div>
//             <CustomDialog />
//         </div>
//     );
// }

// export default page;
