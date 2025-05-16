import React, { useState } from "react";
import {
  walsheim_light,
  walsheim_regular
} from "@/components/constants";

const LeadForm = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files ? files[0] : null;
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-transparent p-2">
      {/* Left Section: File Upload */}
      <div className="flex flex-col items-start w-full md:w-1/2 max-w-md bg-white dark:bg-gray-900 shadow-md rounded-[24] p-6 mb-6 md:mb-0">
        <h2 className={`text-2xl font-semibold mb-2 -mt-2 text-black dark:text-white text-left ${walsheim_light.className}`}>File Upload</h2>
        <hr className="w-full border-gray-300 mb-2" />
        <p className={`text-sm text-gray-600 dark:text-white text-left mb-4 ${walsheim_regular.className}`}>
          Please upload a CSV file containing all the relevant data of the leads. The AI will format and insert the data into the table.
        </p>
        <div className="flex items-center w-full rounded-lg border border-[#CFCFCF]">
          <div className="flex items-center bg-purple-200 border-[#A79AFF] -ml-[1px] border-2 p-2 rounded-l-lg w-1/2">
            <label
              htmlFor="file-upload"
              className={`text-[#A79AFF] border-[#A79AFF] text-center font-medium cursor-pointer flex-shrink-0 block w-full sm:w-auto text-base md:text-base lg:text-base py-1 px-4 ${walsheim_regular.className}`}
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv"
              className="hidden "
              onChange={handleFileChange}
            />
          </div>
          <div className="flex items-center bg-white dark:bg-black p-3  rounded-r-lg w-3/4">
            <span className={`text-base text-gray-500 dark:text-white ${walsheim_light.className}`}>
              {fileName || "No file chosen"}
            </span>
          </div>
        </div>
      </div>

      {/* OR Separator */}
      <div className={`text-lg font-semibold text-black dark:text-white my-4 sm:my-0 sm:mx-6 md:mx-12 md:mt-24 ${walsheim_regular.className}`}>
        OR
      </div>


      {/* Right Section: Manual Data Entry */}
      <div className="w-full md:w-1/2 max-w-md bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
        <h2 className={`text-xl font-semibold text-black dark:text-white mb-2 ${walsheim_light.className}`}>Enter the data manually</h2>
        <hr className="w-full border-gray-300  mb-4" />
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Name"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          />
          <input
            type="text"
            placeholder="Enter Contact Number"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          />
          <input
            type="email"
            placeholder="Enter Email Address (Optional)"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          />
          <input
            type="text"
            placeholder="Occupation Details (Optional)"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          />
          <input
            type="text"
            placeholder="Lead Source (Optional)"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          />
          <input
            type="text"
            placeholder="Lead Status (Beginner Lead by Default)"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          />
          <textarea
            placeholder="Any additional notes or comments (Optional)"
            className={`w-full p-2 border text-black dark:bg-black dark:text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          ></textarea>
          <button
            type="submit"
            className={`w-full text-lg p-2 bg-[#9061FF] text-white rounded-lg hover:bg-[#8459e8] focus:outline-none font-semibold focus:ring-2 focus:ring-purple-300 ${walsheim_light.className}`}
          >
            Enter Lead
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
