import React from 'react';
import { walsheim_bold, walsheim_regular } from "@/components/constants";
// import { FiUser, FiTag } from 'react-icons/fi';
import Image from 'next/image';

const Chart2: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-[40] shadow-md border  border-gray-200 dark:border-gray-700 dark:shadow-gray-600  flex flex-col space-y-4">
      {/* First Stat */}
      <div className="flex items-center -mt-1 space-x-4">
        {/* Circular Icon */}
        <div className="flex mt-3 items-center justify-center w-14 h-14 rounded-full bg-blue-100">
          <Image src="/c2.png" className="text-blue-500 w-10 h-10" alt={''}  width={20} // Or any fixed width
  height={24} />
        </div>
        {/* Stat Details */}
        <div className="flex-1 mt-5">
          <p className={`text-2xl text-gray-900 dark:text-white ${walsheim_bold.className}`}>112</p>
          <p className={`text-sm text-gray-600 dark:text-gray-400 ${walsheim_regular.className}`}>Number of Calls Left</p>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-white"></div>
      {/* Second Stat */}
      <div className="flex items-center space-x-4">
        {/* Circular Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100">
        <Image src="/c22.png" className="text-orange-400 w-10 h-10" alt={''}  width={20} // Or any fixed width
  height={24} />
        </div>
        {/* Stat Details */}
        <div className="flex-1">
          <p  className={`text-2xl text-gray-900 dark:text-white ${walsheim_bold.className}`}>225</p>
          <p className={`text-sm text-gray-600 dark:text-gray-400 ${walsheim_regular.className}`}>Number of messages to attend</p>
        </div>
      </div>
    </div>
  );
};

export default Chart2;
