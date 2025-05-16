import { useState } from "react";
import { X } from "lucide-react";
import ActionsTable from "./ActionsTable";
import {
  walsheim_bold,
  walsheim_regular
} from "@/components/constants";
import Image from "next/image";

const FeedbackIntentSelector = () => {
  const predefinedFeedbacks = [
    "Exploring Competitors", "Pricing", "Product Quality", "Feature Request"
  ];
  const predefinedIntents = [
    "Exploring Competitors", "Pricing", "Product Quality", "Feature Request"
  ];

  const [selectedFeedbacks, setSelectedFeedbacks] = useState(predefinedFeedbacks);
  const [selectedIntents, setSelectedIntents] = useState(predefinedIntents);
  const [customFeedback, setCustomFeedback] = useState("");
  const [customIntent, setCustomIntent] = useState("");

  // Function to add Feedback when pressing Enter or clicking the image
  const addFeedback = (e: { key?: string }) => {
    if ((e.key === "Enter" || !e.key) && customFeedback.trim()) {
      setSelectedFeedbacks([...selectedFeedbacks, customFeedback.trim()]);
      setCustomFeedback("");
    }
  };

  // Function to add Intent when pressing Enter or clicking the image
  const addIntent = (e: { key?: string }) => {
    if ((e.key === "Enter" || !e.key) && customIntent.trim()) {
      setSelectedIntents([...selectedIntents, customIntent.trim()]);
      setCustomIntent("");
    }
  };

  const removeTag = (item: string, type: string) => {
    if (type === "feedbacks") {
      setSelectedFeedbacks(selectedFeedbacks.filter((f) => f !== item));
    } else {
      setSelectedIntents(selectedIntents.filter((i) => i !== item));
    }
  };

  return (
    <div className="p-8 -mt-4 max-w-7xl mx-auto font-sans">
      <h2 className={`text-2xl font-bold mb-8 dark:text-white text-black ${walsheim_bold.className}`}>
        Product Management
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Feedback Section */}
        <div>
          <p className={`text-base font-semibold mb-4 dark:text-white text-gray-900 ${walsheim_bold.className} flex items-center gap-2`}>
            Custom Feedback Reasons
            <div className="relative group">
            <Image src="/info-icon.svg" alt="" className="w-4 h-4 cursor-pointer dark:hidden"/>
            <Image src="/info-dark.svg" alt="" className="w-4 h-4 cursor-pointer hidden dark:block"/>
      <div className="absolute left-1/2 transform -translate-y-1 mt-2 w-48 bg-gray-800 text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        These are the customized feedback reasons that are to be targeted by our AI during Customer Feedback Analysis.
      </div>
    </div>
          </p>
          

          <div className="relative border-b-4 border-gray-400  dark:bg-gray-900 rounded-xl px-5 py-4 flex justify-between items-center bg-white shadow-md">
            <input
              type="text"
              className={`w-full border-none outline-none dark:text-white text-black bg-transparent ${walsheim_regular.className}`}
              placeholder="Type feedback and press Enter"
              value={customFeedback}
              onChange={(e) => setCustomFeedback(e.target.value)}
              onKeyDown={addFeedback}
            />
            <div
              className="w-8 h-8 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center cursor-pointer"
              onClick={() => addFeedback({})} // Calls the same function as Enter
            >
              <Image src="/icons/Product.svg" width="24" height="24" alt="" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            {selectedFeedbacks.map((item) => (
              <span
                key={item}
                className={`flex items-center bg-gray-200 px-5 py-3 rounded-full text-base dark:bg-black dark:text-white text-black border border-gray-400 shadow-md ${walsheim_regular.className}`}
              >
                {item}
                <X className="ml-3 cursor-pointer text-gray-600" size={18} onClick={() => removeTag(item, "feedbacks")} />
              </span>
            ))}
          </div>
        </div>

        {/* Intent Section */}
        <div>
          <p className={`text-base font-semibold mb-4 dark:text-white text-gray-900 ${walsheim_bold.className} flex items-center gap-2`}>
            Custom Intent Reasons
            <div className="relative group">
      <Image src="/info-icon.svg" alt="" className="w-4 h-4 cursor-pointer dark:hidden"/>
      <Image src="/info-dark.svg" alt="" className="w-4 h-4 cursor-pointer hidden dark:block"/> 
      <div className="absolute left-1/2 transform -translate-y-1 mt-2 w-48 bg-gray-800 text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        These are the customized Intent reasons that are to be targeted by our AI during Customer Intent Analysis.
      </div>
    </div>
          </p>
          <div className="relative border-b-4 border-gray-400 dark:bg-gray-900 rounded-xl px-5 py-4 flex justify-between items-center bg-white shadow-md">
            <input
              type="text"
              className={`w-full border-none outline-none dark:text-white text-black bg-transparent ${walsheim_regular.className}`}
              placeholder="Type intent and press Enter"
              value={customIntent}
              onChange={(e) => setCustomIntent(e.target.value)}
              onKeyDown={addIntent}
            />
            <div
              className="w-8 h-8 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center cursor-pointer"
              onClick={() => addIntent({})} // Calls the same function as Enter
            >
              <Image src="/icons/Product.svg" width="24" height="24" alt="" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            {selectedIntents.map((item) => (
              <span
                key={item}
                className={`flex items-center bg-gray-200 px-5 py-3 rounded-full text-base dark:bg-black dark:text-white text-black border border-gray-400 shadow-md ${walsheim_regular.className}`}
              >
                {item}
                <X className="ml-3 cursor-pointer text-gray-600" size={18} onClick={() => removeTag(item, "intents")} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <ActionsTable />
    </div>
  );
};

export default FeedbackIntentSelector;
