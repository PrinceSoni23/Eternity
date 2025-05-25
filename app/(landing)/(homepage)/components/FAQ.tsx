import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  walsheim_bold,
  walsheim_medium,
  walsheim_regular,
} from "@/components/constants";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Saar Ai?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "How can it help us grow in today's market?",
      answer:
        "Saar AI provides innovative solutions that streamline your business processes, enhance decision-making, and drive growth in competitive markets.",
    },
    {
      question: "Why should we choose Saar AI?",
      answer:
        "Saar AI offers cutting-edge technology combined with a user-friendly interface, ensuring your business thrives in the digital age.",
    },
    {
      question: "Is Saar AI customizable for specific needs?",
      answer:
        "Yes, Saar AI is highly customizable, designed to adapt to various industries and unique business requirements.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center -mt-24 px-6 -mb-32">
      <div className="max-w-2xl w-full">
        <h1
          className={`text-5xl font-bold text-center mb-16 ${walsheim_bold.className}`}
        >
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-neutral-950 text-white rounded-lg mb-5 shadow-md relative"
            style={{
              boxShadow: "inset 0 -5px 10px rgba(255, 255, 255, 0.25)",
            }}
          >
            <div
              className={`flex justify-between items-center px-6 py-4 cursor-pointer rounded-lg ${walsheim_medium.className}`}
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <ChevronDownIcon
                className={`w-6 h-6 text-gray-300 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                walsheim_regular.className
              } ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="px-6 py-4 text-sm text-gray-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
