"use client";

import React, {useState, useEffect} from 'react'
import PieChart from '../components/PieChart';
import { C4Data, C5Data, chartData2 } from '../dashboard_data';
import Chart3 from '../components/Chart3';
const companyID = "67bf3f4d011d613e796048fa";

interface LeadDynamicsData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
}

const page = () => {
  const [leadDynamics, setLeadDynamics] = useState<LeadDynamicsData>({
    labels: [],
    datasets: [],
  });
  const [totalConvertedLeads, setTotalConvertedLeads] = useState<any>();
  const [hourlyConvertedLeads, setHourlyConvertedLeads] = useState<any>([]);
  
  const fetchTotalConvertLeads = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/lead-analytics/converted-lead/total-converted-leads/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch  total converted leads.");
      }

      const data = await response.json();
      console.log("Total converted leads : ", data?.data);
      setTotalConvertedLeads(data?.data);
      
    } catch (error: any) {
      console.error("Error in fetching Total converted leads :", error);
    }
  }
  const fetchHourConvertLeads = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/lead-analytics/converted-lead/hourly-converted-leads/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch  hourly converted leads.");
      }

      const data = await response.json();
      console.log("Hourly converted leads : ", data.data);
       const formattedData = data?.data?.map((item: any) => ({
         label : new Date(item?.dateTime)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
         data : item?.leadCount
       }));
        setHourlyConvertedLeads(formattedData);

      
    } catch (error: any) {
      console.error("Error in fetching Hourly converted leads :", error);
    }
  }
  const fetchLeadDynamics = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/lead-analytics/lead-dynamics/lead-dynamics-percentage/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch Lead Dyanmics % .");
      }
     
      const data = await response.json();
      console.log("Lead Dyanmics % : ", data.data);
      const {hotLead, warmLead, coldLead, closedLead, lostLead}= data?.data
      console.log("Lead Dyanmics % count : ", hotLead.count, warmLead.count, coldLead.count, closedLead.count, lostLead.count)

      const formattedData = {
        labels: ["Hot", "Warm", "Cold", "Closed"],
        datasets: [
               {
                 data: [hotLead?.count, warmLead?.count , coldLead?.count , closedLead?.count],
                 backgroundColor: ["#FF6C6C", "#FFD736", "#00C3CE", "#C2C2C2"],
                 borderWidth: 0,
               },
             ],
      };

      // DATA FORMAT SHOULD BE LIKE BELOW
      //   const chartData2 = {
      //     labels: ["Hot", "Warm", "Cold", "Closed"],
      //     datasets: [
      //       {
      //         data: [55, 20, 10, 15], // Dynamic percentage values
      //         backgroundColor: ["#FF6C6C", "#FFD736", "#00C3CE", "#C2C2C2"],
      //         borderWidth: 0,
      //       },
      //     ],
      //   };

      console.log("formated dta : ", formattedData)
      setLeadDynamics(formattedData);

      
    } catch (error: any) {
      console.error("Error in fetching Lead Dyanmics % :", error);
    }
  }

  useEffect(() => {
    fetchTotalConvertLeads();
    fetchHourConvertLeads();
    fetchLeadDynamics();
  }
  , []);



  return (
    <>
     <div className="grid grid-cols-1 gap-3 p-2 mt-2 lg:grid-cols-3">
                <PieChart title="Leads Dynamics" data={leadDynamics} />
                <Chart3
                  title="Converted Leads"
                  total={totalConvertedLeads}
                  percentageChange="+20.23"
                  strokeColor="#2E47F9"
                  plotData={hourlyConvertedLeads}
                />
                <Chart3
                  title="Revenue From Leads"
                  total={"$4320"}
                  percentageChange="+20.23"
                  strokeColor="#00B840"
                  data={C5Data}
                />
              </div> 
              
    
    
    
    </>
  )
}

export default page