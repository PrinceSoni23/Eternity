import React from 'react';
import {
  walsheim_bold,
  walsheim_regular
} from "@/components/constants";
type TableProps = {
  headings: string[];
  data: { [key: string]: string }[];
};

const DynamicTable: React.FC<TableProps> = ({ headings, data }) => {
  return (
    <div className="w-full h-auto mt-4 dark:bg-gray-800 dark:border-gray-700  dark:shadow-gray-600 border-gray-100 shadow-md">
      {/* Add horizontal scrolling for small screens */}
      <div className="overflow-x-auto rounded-2xl dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border">
        <table className="min-w-full table-auto border-collapse dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border">
          <thead className="bg-[#54446D]">
            <tr>
              <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-700 border-b border-gray-300">
                <input type="checkbox" className="form-checkbox" />
              </th>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 text-left text-xs sm:text-sm font-bold text-white border-b border-gray-300 ${walsheim_bold.className}`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border "
              >
                <td className="px-4 py-2 text-xs sm:text-sm text-gray-600 dark:text-white border-b border-gray-300 ">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                {headings.map((heading, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-2 text-xs sm:text-sm text-gray-600 dark:text-white border-b border-gray-300 ${walsheim_regular.className}`}
                  >
                    {row[heading] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
