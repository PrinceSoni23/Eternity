import { walsheim_bold, walsheim_regular } from "@/components/constants";
import Image from "next/image";
import React from "react";
// import { FiUser, Fi
// Tag } from "react-icons/fi";

// interface Impression {
//   _id: string;
//   dateTime: string;
//   totalImpressions: number;
//   uniqueImpressions: number;
// }
interface Chart2Data {
//  data : Impression[];
 txnPpl : number;
 totalPpl : number;

}
const Chart2: React.FC<Chart2Data> =  ({txnPpl, totalPpl}) => {
  // console.log("Chart2 data: ", data);
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-[40] shadow-md border dark:shadow-gray-600 border-gray-200 dark:border-gray-700 flex flex-col space-y-4">
      {/* First Stat */}
      <div className="flex items-center -mt-[2.5px] space-x-4">
        {/* Circular Icon */}
        <div className="flex mt-3 items-center justify-center w-16 h-16 rounded-full bg-blue-100">
          <Image src="/c2.png" alt="Circular Icon 1" className="text-blue-500 w-10 h-10" width={20} height={20} />
        </div>
        {/* Stat Details */}
        <div className="flex-1">
          <p
            className={`text-2xl text-gray-900 dark:text-white ${walsheim_bold.className}`}
          >
            {totalPpl}
          </p>
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${walsheim_regular.className}`}
          >
            Number of people connected
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-white"></div>
      {/* Second Stat */}
      <div className="flex items-center space-x-4">
        {/* Circular Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
          <Image src="/c22.png" alt="Circular Icon 2" className="text-orange-400 w-10 h-10" width={20} height={20} />
        </div>
        {/* Stat Details */}
        <div className="flex-1 mt-1">
          <p
            className={`text-2xl text-gray-900 dark:text-white ${walsheim_bold.className}`}
          >
            {txnPpl}
          </p>
          <p
            className={`text-sm text-gray-600 dark:text-gray-400 ${walsheim_regular.className}`}
          >
            Number of people made a transaction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart2;
