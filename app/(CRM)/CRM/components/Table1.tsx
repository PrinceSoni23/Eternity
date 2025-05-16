import { useState } from "react";
import {
  walsheim_bold,
  walsheim_regular,
  walsheim_thin,
} from "@/components/constants";

interface TableData {
  name: string;
  summary: string;
  lead: string;
  lsa: string;
  recommendation: string;
  lastDateTime: string;
}

interface DynamicTableProps {
  callData: TableData[];
  messageData: TableData[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ callData, messageData }) => {
  const [activeTab, setActiveTab] = useState<"Calls" | "Messages">("Calls");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [tableData, setTableData] = useState<{ calls: TableData[]; messages: TableData[] }>(
    {
      calls: callData,
      messages: messageData,
    }
  );

  const data = activeTab === "Calls" ? tableData.calls : tableData.messages;

  const handleSelectAll = () => {
    setSelectedRows(selectedRows.length === data.length ? [] : data.map((_, index) => index));
  };

  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDelete = () => {
    setTableData((prev) => ({
      ...prev,
      [activeTab === "Calls" ? "calls" : "messages"]: data.filter(
        (_, index) => !selectedRows.includes(index)
      ),
    }));
    setSelectedRows([]);
  };

  return (
    <div className="p-4 max-w-full bg-white rounded-[32] dark:bg-gray-800  border shadow-md">
      <div className={`flex text-lg justify-start gap-4 mb-4 ${walsheim_thin.className}`}>
        {["Calls", "Messages"].map((tab) => (
          <button
            key={tab}
            className={`px-2 py-1 font-semibold rounded-lg transition-all ${
              activeTab === tab ? "text-purple-600" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab as "Calls" | "Messages")}
          >
            {tab}
          </button>
        ))}
      </div>

      {selectedRows.length > 0 && (
        <div className="flex justify-end mb-2">
          <button
            className="bg-red-600 text-white text-sm px-4 py-2 rounded-[32] hover:bg-red-700 transition"
            onClick={handleDelete}
          >
            Delete Selected
          </button>
        </div>
      )}

      <div className="overflow-x-auto rounded-[32] border shadow-md">
        <table className="min-w-full bg-white dark:bg-gray-800 border">
          <thead className={`bg-[#54446D] text-white ${walsheim_bold.className}`}>
            <tr>
              <th className="py-2 px-4 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              {["Name", "Summary", "Lead", "LSA", "Recommendation", "Last Date & Time"].map(
                (header) => (
                  <th key={header} className="py-2 px-4 text-sm text-centre">{header}</th>
                )
              )}
              <th className="py-2 px-4 text-sm text-center">{activeTab}</th>
              <th className="py-2 px-4 text-sm text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr key={index} className="bg-white dark:bg-gray-700 hover:bg-gray-100 transition">
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleRowSelect(index)}
                    />
                  </td>
                  <td className={`py-2 text-sm text-center dark:text-white text-gray-600 px-4 ${walsheim_regular.className}`}>{row.name}</td>
                  <td className={`py-2 text-sm text-center dark:text-white text-gray-600 px-4 ${walsheim_regular.className}`}>{row.summary}</td>
                  <td
                    className={`py-2 text-sm font-semibold text-center px-4 ${
                      row.lead === "Hot"
                        ? "text-red-600"
                        : row.lead === "New Lead"
                        ? "text-green-600"
                        : row.lead === "Warm"
                        ? "text-yellow-500"
                        : "text-gray-600"
                    }`}
                  >
                    {row.lead}
                  </td>
                  <td className={`py-2 text-sm text-center dark:text-white text-gray-600 px-4 ${walsheim_regular.className}`}>{row.lsa}</td>
                  <td className={`py-2 text-sm text-center dark:text-white text-gray-600 px-4 ${walsheim_regular.className}`}>{row.recommendation}</td>
                  <td className={`py-2 text-sm text-center dark:text-white text-gray-600 px-4 ${walsheim_regular.className}`}>{row.lastDateTime}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      className={`${
                        activeTab === "Calls"
                          ? "text-green-600 hover:text-green-800"
                          : "text-blue-600 hover:text-blue-800"
                      }`}
                    >
                      {activeTab === "Calls" ? "📞" : "✉️"}
                    </button>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button className="text-gray-600 dark:text-white hover:text-gray-800">⋯</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className={`py-2 text-sm text-center dark:text-white text-gray-600 px-4 ${walsheim_regular.className}`}>
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
