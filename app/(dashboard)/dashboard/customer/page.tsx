"use client";

import React, { useState, useEffect } from 'react'
import RevenueCard from "../components/RevenueCard";
import Chart3 from '../components/Chart3';
import {  C3Data,  CustomerData } from '../dashboard_data';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import CAChart from '../components/CAChart';

const companyID = "67bf3f4d011d613e796048fa";

const Page = () => {

  const [hourlyCustomers, setHourlyCustomers] = useState([]);
  // const [totalCustomers, setTotalCustomers] = useState([]);
  // const [lifetimeTotalCustomers, setLifetimeTotalCustomers] = useState([]);
  // const [lifetimeClosedCustomers, setLifetimeClosedCustomers] = useState([]);
  const [hourlyTotalCustomers, setHourlyTotalCustomers] = useState([]);
  const [hourlyClosedCustomers, setHourlyClosedCustomers] = useState([]);
  const [totalScore, setTotalScore] = useState<number|string>(0);
  const [minuteAverageScore, setMinuteAverageScore] = useState([]);
  // const [totalCustomerSatisfaction, setTotalCustomerSatisfaction] = useState([]);
  const [customerSatisfaction, setCustomerSatisfaction] = useState<{ labels: string[]; datasets: { data: number[]; backgroundColor: string[]; borderWidth: number; }[] } | null>(null);

  const [trafficLocation, setTrafficLocation] = useState([]);

  const fetchTotalCustomers = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-acquisition/total-customers-acquired/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total customers acquisition data.");
      }

      const data = await response.json();
      console.log("==========  CUSTOMER ACQUISITION DATA ==========")
      console.log("** Total customers acquisition data : ", data?.totalCustomersAcquired);
    } catch (error) {
      console.error("Error in fetching total customers acquisition data:", error);
    }
  }
  const fetchHourCustomers = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-acquisition/hourly-customers-acquired/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly customers acquisition data.");
      }

      const data = await response.json();
      console.log("** hourly customers acquisition data : ", data);
      

      setHourlyCustomers(data?.data);
    } catch (error) {
      console.error("Error in fetching hourly customers acquisition data:", error);
    }
  }

  const fetchLifeTotalCustomers = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-count/lifetime-total-customer-count/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch lifetime total customers data.");
      }

      const data = await response.json();
      console.log("==========  CUSTOMER COUNT DATA ==========")

      console.log("→→ lifetime total customers  data : ", data?.data);
    } catch (error) {
      console.error("Error in fetching lifetime total customers data:", error);
    }
  }
  const fetchLifeClosedCustomers = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-count/lifetime-closed-customer-count/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch lifetime closed customers data.");
      }

      const data = await response.json();
      console.log("→→ lifetime closed customers  data : ", data?.data);
    } catch (error) {
      console.error("Error in fetching lifetime closed customers data:", error);
    }
  }
  const fetchHourTotalCustomers = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-count/hourly-total-customer-count/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly total customers data.");
      }

      const data = await response.json();
      console.log("→→ hourly total customers  data : ", data?.data);
      setHourlyTotalCustomers(data?.data);
    } catch (error) {
      console.error("Error in fetching hourly total customers data:", error);
    }
  }
  const fetchHourClosedCustomers = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-count/hourly-closed-customer-count/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly closed customers data.");
      }

      const data = await response.json();
      console.log("→→ =================== hourly closed customers  data : ", data);
      setHourlyClosedCustomers(data?.data.map((item: any) => item?.closedCustomers));
      
    } catch (error) {
      console.error("Error in fetching hourly closed customers data:", error);
    }
  }


  const fetchTotalScore = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-engagement/total-score/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total score data.");
      }

      const data = await response.json();
      console.log("==========  CUSTOMER ENGAGEMENT DATA ==========")

      console.log("*→ total score data : ", data?.data);
      setTotalScore(data?.data);
    } catch (error) {
      console.error("Error in fetching total score data:", error);
    }
  }
  const fetchMinAvgScore = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-engagement/minute-average-score/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch minute average score.");
      }

      const data = await response.json();
      console.log("*→ Minute avergage score : ", data?.data);
      const formattedData = data?.data.map((item: { timestamp: string; value: number }) => ({
        label: "gtm_customer",
        data: item,
      }));
      setMinuteAverageScore(formattedData);
      
    } catch (error) {
      console.error("Error in fetching Minute average score:", error);
    }
  }


  const fetchTotalCustomerSatisfaction = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-satisfaction/total-customer-satisfaction/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total customer satisfaction.");
      }

      const data = await response.json();
      console.log("==========  CUSTOMER SATISFACTION DATA ==========")
      console.log("↑* total customer satisfaction : ", data?.data);
    } catch (error) {
      console.error("Error in fetching total customer satisfaction:", error);
    }
  }
  const fetchCustomerSatisfaction = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/customer-satisfaction/customer-satisfaction/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch  customer satisfaction.");
      }

      const data = await response.json();
      console.log("↑*  customer satisfaction : ", data);
      const formattedData = {
        labels: ["Negative", "Neutral", "Positive"],
         datasets: [
              {
                data: [data?.negative, data?.neutral , data?.positive],
                backgroundColor: ["#4DB351", "#0BA7DE", "#FF7E3E"],
                borderWidth: 0,
              },
            ],
      }
      setCustomerSatisfaction(formattedData);
      
    } catch (error) {
      console.error("Error in fetching total customer satisfaction:", error);
    }
  }


  const fetchTrafficLocation = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/customer-analytics/traffic-location/traffic-location-data/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch  traffic location data.");
      }

      const data = await response.json();
      console.log("Traffic location data : ", data.data);
      const formattedData = data?.data?.map((item: { location: string; locationCount: number }) => ({
        label: item.location,
        value: item.locationCount,
      }));

      setTrafficLocation(formattedData);
      
    } catch (error) {
      console.error("Error in fetching traffic location data:", error);
    }
  }



  useEffect(() => {
    fetchTotalCustomers();
    fetchHourCustomers();

    fetchLifeTotalCustomers();
    fetchLifeClosedCustomers();
    fetchHourTotalCustomers();
    fetchHourClosedCustomers();

    fetchTotalScore();
    fetchMinAvgScore();

    fetchTotalCustomerSatisfaction();
    fetchCustomerSatisfaction();

    fetchTrafficLocation();
  }, []);
  return (


    <>
      <div className="grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3">
        <RevenueCard data={CustomerData}
          head1="Total Active Customers" data1={hourlyTotalCustomers}
          head2="Total Closed Customers" data2={hourlyClosedCustomers}
        />
        <Chart3
          title="Customer Engagement "
          total={totalScore}
          percentageChange="+5.12"
          strokeColor="#2E47F9"
          data={C3Data}
          plotData={minuteAverageScore}
        />
        <PieChart 
          title="Customer Satisfaction" 
          data={customerSatisfaction || { labels: [], datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }] }} 
        />
      </div>
      <div className="w-full p-4 h-3/6">
        {/* CustomerGraph Components */}
        <div className="flex flex-wrap w-full h-auto gap-4">
          <div className="flex-1 min-w-1/2 lg:w-1/2 p-2">
            {/* Component 1 */}
            <BarChart
              title="Location Traffic"
              data={trafficLocation}
              maxValue={100}
              barColor="bg-[#A79AFF]"
              scaleFactor={250}
            />
          </div>
          <div className="flex-1 min-w-1/2 lg:w-1/2 p-2">
            <CAChart dataValues={hourlyCustomers} />
          </div>
        </div>
      </div>




    </>
  )
}

export default Page