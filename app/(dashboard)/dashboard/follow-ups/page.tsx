"use client";

import React, {useState, useEffect} from 'react'
import CustomerGraph from '../components/customergraph';
import { data3, trafficData2 } from '../dashboard_data';
import BarChart from '../components/BarChart';
const companyID = "67bf3f4d011d613e796048fa";

const page = () => {
  const [followUpRsns, setFollowUpRsns] = useState<any>([]);
  const [totalFollowRsns, setTotalFollowRsns] = useState<any>([]);
  const [successFollowUps, setSuccessFollowUps] = useState<any>([]);
  const fetchTotalFollowRsns = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/follow-ups/follow-up-reason/total-follow-up-reasons/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch  total follow up rsns.");
        }
  
        const data = await response.json();
        console.log("total follow up rsns : ", data.data);
        setTotalFollowRsns(data.data);
        // const formattedData = data?.data?.map((item: any) => ({
        //   label : item?.location,
        //   value : item?.locationCount
        // }));
  
        
      } catch (error: any) {
        console.error("Error in fetching total follow up rsns:", error);
      }
    }
  const fetchFollowRsns = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/follow-ups/follow-up-reason/follow-up-reason-data/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch follow up rsns.");
        }
  
        const data = await response.json();
        console.log("Follow up rsns : ", data.data);
        // {
        //   label: "Lost Interest due of high amount",
        //   percentage: 43.3,
        //   count: 3232,
        //   color: "#A79AFF",
        // },
        const formattedData = data?.data?.map((item: any) => ({
          label : item?.description,
          count : item?.count,
          percentage : item?.percentage,
          color : "#A79AFF",
        }));
       setFollowUpRsns(formattedData);
        
      } catch (error: any) {
        console.error("Error in fetching follow up rsns:", error);
      }
    }
  const fetchTotalSuccessFollow = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/follow-ups/successful-follow-up/total-successful-follow-ups/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch total successful follow up .");
        }
  
        const data = await response.json();
        console.log("Total successful follow up : ", data.data);
        // const formattedData = data?.data?.map((item: any) => ({
        //   label : item?.location,
        //   value : item?.locationCount
        // }));
  
        
      } catch (error: any) {
        console.error("Error in fetching total successful follow up :", error);
      }
    }
  const fetchSuccessFollow = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/follow-ups/successful-follow-up/successful-follow-up-data/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch successful follow up .");
        }
  
        const data = await response.json();
        console.log("Successful follow up : ", data.data);
        const formattedData = data?.data?.map((item: any) => ({
           label : 'gtm',
           value : item
         }));
          setSuccessFollowUps(formattedData);
        
      } catch (error: any) {
        console.error("Error in fetching successful follow up :", error);
      }
    }

    useEffect (
      () => {
        console.log("----------- FOLLOW UP REASONS -----------")
        fetchTotalFollowRsns();
        fetchFollowRsns();
        console.log("----------- SUCCESS FOLLOW UPS ----------")
        fetchTotalSuccessFollow();
        fetchSuccessFollow();


      }, []
    )
  return (
    <>
 <div className="flex flex-wrap w-full -mt-2 gap-3 sm:gap-4"> 
                {/* Component 1 */}
                 <div className="flex-1 w-full sm:w-1/2 p-2 sm:p-3">
                  <CustomerGraph
                    title="Follow Up Reasons"
                    totalIntent={totalFollowRsns}
                    percentageChange="+20.23%"
                    data={followUpRsns}
                  />
                </div> 

                {/* Component 2 */}
                 <div className="flex-1 w-screen sm:w-1/2 p-2 sm:p-3">
                  <BarChart
                    title="Successful Follow Ups"
                    data={successFollowUps}
                    maxValue={100}
                    barColor="bg-[#A79AFF]"
                    scaleFactor={250}
                  />
                </div>
              </div>
    
    </>
  )
}

export default page