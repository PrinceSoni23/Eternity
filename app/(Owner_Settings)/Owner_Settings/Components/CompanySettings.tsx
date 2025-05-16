"use client";
import { useState, useEffect } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import {
  walsheim_bold,
  walsheim_regular,
} from "@/components/constants";
import Image from "next/image";

export default function CompanySettings() {
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("companySettings")) || {
        name: "Eternity Labs",
        owner: "Krishna Rajput",
        email: "care@eternitylabs.ai",
        type: "Technology",
        domain: "Eternity Labs is a cutting-edge technology company dedicated to revolutionizing business automation through innovation.",
        customers: "Target Customers of this company are start-up founders and board members of the company. Also specifically for doctors for appointment.",
        sellingPoint: "We deliver the technology at a cost lower than all competitors, and the technology is highly advanced and forward-thinking.",
        products: "Enter API consisting of a few of your products",
      };
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("companySettings", JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const [editingField, setEditingField] = useState<{ field: string; label: string } | null>(null);
  const [tempValue, setTempValue] = useState("");
  const [refreshClicked, setRefreshClicked] = useState(false);

  const handleEdit = (field: string, label: string) => {
    if (field === "products") {
      setTempValue(formData.products); // pre-populate with the current value
      setEditingField({ field, label }); // enable editing for products
    } else {
      setEditingField({ field, label });
      setTempValue(formData[field]);
    }
  };

  const handleSave = () => {
    if (editingField) {
      handleChange(editingField.field, tempValue);
      setEditingField(null);
    }
  };

  const handleRefreshClick = () => {
    if (editingField?.field === "products") {
      handleSave(); // save the products value before refreshing
    }
    setRefreshClicked(true);
    setTimeout(() => {
      setRefreshClicked(false);
    }, 1000);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto dark:bg-gray-800 dark:text-white">
      <p className={`font-bold text-xl -mt-4 mb-4 dark:text-white text-black ${walsheim_regular.className}`}>Company Settings</p>
      {/* Top Banner */}
      <div className="bg-[#FFD736] p-6 rounded-lg flex justify-between items-center relative dark:bg-gray-700 dark:text-gray-300">
        <div className="text-center mx-auto">
          <div className={`bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-sm font-bold ${walsheim_regular.className}`} >
            <Image src="/icons/Settingslogo.png" alt="" />
          </div>
          <p className={`font-bold dark:text-white mt-2  ${walsheim_bold.className}`}>PREMIUM PLAN</p>
          <p className={`text-sm font-semibold text-red-600 cursor-pointer dark:text-red-600 ${walsheim_regular.className}`}>Upgrade</p>
        </div>
        <div className={`absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm dark:bg-red-600 ${walsheim_regular.className}`}>
          2FA Disabled
        </div>
      </div>

      {/* Editable Fields */}
      <span className="mt-3 text-xs  text-gray-400"><span className="text-red-700">*</span> Click submit button below after making any changes</span>
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 ${walsheim_regular.className}`}>
        {[{ label: "Name", key: "name" }, { label: "Owner", key: "owner" }, { label: "Email", key: "email" }].map((field) => (
          <div key={field.key}>
            <p className="text-sm font-bold mb-1">{field.label}</p>
            <input
              type="text"
              value={formData[field.key]}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="w-full border border-gray-300 p-2 border-b-4 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        ))}
        <div>
          <p className="text-sm font-bold mb-1">Type</p>
          <select
            value={formData.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className={`w-full border border-gray-300 p-2 rounded-xl border-b-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${walsheim_regular.className}`}
          >
            {["Technology", "Finance", "Healthcare", "Retail", "Education", "Entertainment", "Manufacturing", "Consulting", "Other"].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Larger Editable Fields */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 ${walsheim_regular.className}`}>
        {[{ label: "Domain of Company", key: "domain" }, { label: "Target Customers", key: "customers" }, { label: "Unique Selling Point", key: "sellingPoint" }].map((field) => (
          <div key={field.key}>
            <p className="text-sm font-bold mb-1">{field.label}</p>
            <div
              className="border bg-white border-gray-300 p-3 rounded-xl border-b-4 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onClick={() => handleEdit(field.key, field.label)}
            >
              {formData[field.key].slice(0, 80)}...
            </div>
          </div>
        ))}

        {/* Primary Products Section with Refresh Icon */}
        <div>
  <p className="text-sm font-bold mb-1">Primary Products</p>
  <div className="border bg-white border-gray-300 p-2 rounded-xl border-b-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white flex items-center">
    <textarea
      value={formData.products}
      onChange={(e) => setFormData({ ...formData, products: e.target.value })}
      className="w-full bg-transparent border-none   outline-none resize-none whitespace-pre-wrap break-words dark:bg-gray-700 dark:text-white"
    />
    <FiRefreshCcw
      className={`text-green-500 text-lg cursor-pointer ml-2 ${refreshClicked ? 'animate-spin' : ''}`}
      onClick={handleRefreshClick}
    />
  </div>
</div>


      </div>

      <div className="flex items-center justify-center mt-2 ">
  <button className="bg-red-600 text-white px-4 py-1 rounded-lg text-lg shadow-md hover:bg-red-700 transition">
    Submit
  </button>
</div>

      {/* Full-Screen Editor */}
      {editingField && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    onClick={() => setEditingField(null)} // Close popup when clicking outside
  >
    <div 
      className="bg-white p-6 rounded-xl border-b-4 w-full max-w-lg dark:bg-gray-800 dark:text-white"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
    >
      <h2 className="text-lg font-bold mb-2">Edit {editingField.label}</h2>
      <textarea
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        className="w-full border p-2 h-40 rounded-xl border-b-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-auto resize-none"
      ></textarea>
      <button
        onClick={handleSave}
        className="mt-4 bg-gray-900 flex items-center justify-center text-white font-semibold px-4 py-2 rounded-md w-full dark:bg-gray-700"
      >
        Save
      </button>
    </div>
  </div>
)}

    </div>
  );
}
