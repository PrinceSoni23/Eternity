// import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import ArrowIcon from "./Icons/ArrowIcon";
import Img from "./Icons/Img";
// import GithubIcon from "./Icons/GithubIconForSomethingIveBuild";
// import ExternalLink from "./Icons/ExternalLink";
// import Image from "next/image";

export default function SomethingIveBuilt() {
  // const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-black w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"></span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Our Innovative Product Solutions
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Ens Vision */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-black z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"/ai_caller"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://img.freepik.com/premium-vector/customer-service-woman-manager-concept-ai-assistance-headphone-call-center-hotline-client-support-consultant-online-help-information-headset-girl_115739-918.jpg?ga=GA1.1.948001711.1739173677&semt=ais_hybrid"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
              <a href={"/ai_caller"} target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full bg-black opacity-30 z-10"></div>
                <div className="absolute w-full h-full bg-black opacity-80 z-10"></div>
                <Img src={"https://img.freepik.com/premium-vector/customer-service-woman-manager-concept-ai-assistance-headphone-call-center-hotline-client-support-consultant-online-help-information-headset-girl_115739-918.jpg?ga=GA1.1.948001711.1739173677&semt=ais_hybrid"} alt={"Project Screen shot"} className={`w-full h-full`} />
                </a>
              </div>
            </div>
                  
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">AI.NityoraLabs</span>
                <a href="/ai_caller" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    AI Caller
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-gray-900 rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  <span className="text-[#64ffda]">Nityora Labs</span>, provides an AI-powered 
                  communication solution that automates customer interactions through voice 
                  recognition and natural language processing. It efficiently <span className="text-[#64ffda]"> manages inbound
                  and outbound calls, schedules appointments, and provides real-time assistance.</span>
                    With AI Caller, organizations can enhance <span className="text-[#64ffda]">productivity, reduce human errors , </span> 
                   and deliver seamless customer service  with AI-driven precision and helps 
                   businesses enhance productivity and customer satisfaction while cutting
                    operational costs.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Automation</span>
                <span className="pr-4 z-10">Scalability</span>
                <span className="pr-4 z-10">Engagement</span>
                <span className="pr-4 z-10">Personalization</span>
                <span className="pr-4 z-10">Optimization</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a href="/ai_caller" target={"_blank"} rel="noreferrer">
                  {/* <ExternalLink router={undefined} url={""} /> */}
                  <Img src={"https://img.icons8.com/?size=100&id=88586&format=png&color=FFFFFF"} alt={"Project Screen shot"} className={`w-5 h-5`} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - YpredictAI */}

        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-black z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="/analytics" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?ga=GA1.1.948001711.1739173677&semt=ais_hybrid"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-black opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-black opacity-80 z-10"></div>
                <Img src={"https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?ga=GA1.1.948001711.1739173677&semt=ais_hybrid"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">AI.NityoraLabs</span>
                <a href="/analytics" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    AI Analytics
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                AI Analytics is an intelligent data analysis platform that enables businesses to
                 extract <span className="text-[#64ffda]"> meaningful insights from vast datasets. </span> It utilizes machine learning and 
                 predictive analytics to <span className="text-[#64ffda]"> optimize decision-making, detect trends, and automate reporting. </span>
                  It  helps businesses make informed decisions.With 
                   interactive dashboards, and seamless integrations, 
                   AI Analytics transforms raw data into actionable insights.
                   and empowers organizations to stay ahead of the competition. 
                    
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Processing</span>
                <span className="pr-4 z-10">Prediction</span>
                <span className="pr-4 z-10">Visualization</span>
                <span className="pr-4 z-10">Customization</span>
                <span className="pr-4 z-10">Accuracy</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <a href="/analytics" target={"_blank"} rel="noreferrer">
                    {/* <ExternalLink url={""} router={router} /> */}
                    <Img src={"https://img.icons8.com/?size=100&id=88586&format=png&color=FFFFFF"} alt={"Project Screen shot"} className={`w-5 h-5`} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 mt-8 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-black z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-black 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://img.freepik.com/free-photo/female-programmer-scanning-her-face-with-biometric-security-technology-virtual-screen-digital-remix_53876-104936.jpg?ga=GA1.1.948001711.1739173677&semt=ais_hybrid"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
              <a href={"/marketing"} target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full bg-black opacity-30 z-10"></div>
                <div className="absolute w-full h-full bg-black opacity-80 z-10"></div>
                <Img src={"https://img.freepik.com/free-photo/female-programmer-scanning-her-face-with-biometric-security-technology-virtual-screen-digital-remix_53876-104936.jpg?ga=GA1.1.948001711.1739173677&semt=ais_hybrid"} alt={"Project Screen shot"} className={`w-full h-full`} />
                </a>
              </div>
            </div>
                  
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">AI.NityoraLabs</span>
                <a href="/marketing" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    AI CRM
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-gray-900 rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                AI CRM is a next-generation customer relationship management solution that uses
                 artificial intelligence to  <span className="text-[#64ffda]">enhance customer engagement, sales automation, 
                 and service efficiency. </span> AI CRM automates repetitive tasks, and streamlines workflows,
                  making customer management more efficient. It intelligently  <span className="text-[#64ffda]"> manages customer interactions,
                  tracks leads, and provides personalized recommendations to improve conversions.</span> 
                   It helps businesses to build stronger relationships, boost sales performance, and deliver
                    exceptional customer service with minimal effort.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Insights</span>
                <span className="pr-4 z-10">Efficiency</span>
                <span className="pr-4 z-10">Engagement </span>
                <span className="pr-4 z-10">Prediction</span>
                <span className="pr-4 z-10">Automation</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <img src="https://img.icons8.com/?size=100&id=hUqP035cA2Bd&format=png&color=000000" /> */}
                 <Img src={"https://img.icons8.com/?size=100&id=88586&format=png&color=FFFFFF"} alt={"Project Screen shot"} className={`w-5 h-5`} />
                <a href="/marketing" target={"_blank"} rel="noreferrer">
                  {/* <ExternalLink router={undefined} url={""} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
