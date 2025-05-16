"use client";

import React, { useState, useEffect } from 'react'
import RevenueCard from "../components/RevenueCard";
import Chart3 from '../components/Chart3';
import { C2Data } from '../dashboard_data';
import ChartCall4 from '../components/call-analytics/Chartcall4';

const companyID = "67bf3f4d011d613e796048fa";

const Page = () => {

  const [totalCalls, setTotalCalls] = useState([]);
  const [callsPicked, setCallsPicked] = useState([]);
  // const [lifeTotalCalls, setLifeTotalCalls] = useState([]);
  // const [lifePickedCalls, setLifePickedCalls] = useState([]);

  const [hourTotalDuration, setHourTotalDuration] = useState([]);
  const [totalAvgDuration, setTotalAvgDuration] = useState<number|string>();
  // const [totalDuration, setTotalDuration] = useState([]);
  const [hourlyAvgDuration, setHourlyAvgDuration] = useState([]);

  // const [lifeAvgHoldTime, setLifeAvgHoldTime] = useState([]);
  // const [lifeAvgAirTime, setLifeAvgAirTime] = useState([]);
  const [hourAvgHoldTime, setHourAvgHoldTime] = useState([]);
  const [hourAvgAirTime, setHourAvgAirTime] = useState([]);


  const fetchTotalCalls = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-count/hourly-total-call-count/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total calls data.");
      }

      const data = await response.json();
      console.log("-- Total call data : ", data?.data);
      setTotalCalls(data?.data);
    } catch (error) {
      console.error("Error in fetching total calls data:", error);
    }
  }
  const fetchCallsPicked = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-count/hourly-call-picked/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch picked calls data.");
      }

      const data = await response.json();
      console.log("-- Picked call data : ", data?.data);
      setCallsPicked(data?.data);
    } catch (error) {
      console.error("Error in fetching picked calls data:", error);
    }
  }
  const fetchLifeTotalCalls = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-count/lifetime-call-count/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch lifetime total calls data.");
      }

      const data = await response.json();
      console.log("-- Lifetime total call data : ", data?.data);
      // setLifeTotalCalls(data?.data);
    } catch (error) {
      console.error("Error in fetching lifetime total calls data:", error);
    }
  }
  const fetchLifePickedCalls = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-count/lifetime-call-picked/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch lifetime picked calls data.");
      }

      const data = await response.json();
      console.log("-- Lifetime picked call data : ", data?.data);
      console.log("-- -- -- -- -- -- -- -- ")
      // setLifePickedCalls(data?.data);

    } catch (error) {
      console.error("Error in fetching lifetime picked calls data:", error);
    }
  }


  const fetchHourTotalDuration = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-duration/hourly-total-duration/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly total duration data.");
      }

      const data = await response.json();
      //console.log("== Hourly total duration data : ", data?.data);
      const formattedData = data?.data?.map((item: any) => ({
        data: item?.totalDuration,
        label: new Date(item?.dateTime)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));

      setHourTotalDuration(formattedData);

    } catch (error) {
      console.error("Error in fetching hourly total duration data:", error);
    }
  }
  const fetchTotalAvgDuration = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-duration/total-average-duration/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total average duration data.");
      }

      const data = await response.json();
      //console.log("== total average duration data : ", data?.data);
      setTotalAvgDuration(data?.data);

    } catch (error) {
      console.error("Error in fetching total average duration data:", error);
    }
  }
  const fetchTotalDuration = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-duration/total-duration/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total  duration data.");
      }

      const data = await response.json();
      //console.log("== total duration data : ", data?.data);

    } catch (error) {
      console.error("Error in fetching total duration data:", error);
    }
  }
  const fetchHourlyAvgDuration = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/call-duration/hourly-average-duration/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly avg duration data.");
      }

      const data = await response.json();
      //console.log("== hourly avg duration data : ", data?.data);
      //console.log("== == == ==")

      const formattedData = data?.data.map((avgDuration: { label: string; data: number }) => ({
        label: "gtmavg",
        data: avgDuration.data,
      }));
      //console.log("== formatted hourly avg duration data : ", formattedData);
      setHourlyAvgDuration(formattedData);

    } catch (error) {
      console.error("Error in fetching hourly avg duration data:", error);
    }
  }


  const fetchLifeAvgHoldTime = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/hold-air-time/lifetime-average-hold-time/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch lifetime avg hold time.");
      }

      const data = await response.json();
      //console.log("=*= lifetime avg hold time : ", data?.data);

    } catch (error) {
      console.error("Error in fetching lifetime avg hold time:", error);
    }
  }
  const fetchLifeAvgAirTime = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/hold-air-time/lifetime-average-air-time/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch lifetime avg air time.");
      }

      const data = await response.json();
      //console.log("=*= lifetime avg air time : ", data?.data);

    } catch (error) {
      console.error("Error in fetching lifetime avg air time:", error);
    }
  }
  const fetchHourAvgHoldTime = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/hold-air-time/hourly-average-hold-time/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly avg hold time.");
      }

      const data = await response.json();
      //console.log("=*= hourly avg hold time : ", data?.data);
      const formattedData = data?.data?.map((item: any) => ({
        label: new Date(item?.dateTime)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        data: item?.hourlyAverageHoldTime,
      }));
      setHourAvgHoldTime(formattedData);

    } catch (error) {
      console.error("Error in fetching hourly avg hold timee:", error);
    }
  }
  const fetchHourAvgAirTime = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/call-analytics/hold-air-time/hourly-average-air-time/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch hourly avg air time.");
      }

      const data = await response.json();
      //console.log("=*= hourly avg air time : ", data?.data);
      //console.log("=*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*= =*=");
      const formattedData = data?.data?.map((item: any) => ({
        label: new Date(item?.dateTime)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        data: item?.hourlyAverageAirTime,
      }));
      setHourAvgAirTime(formattedData);
      console.log("== formatted hourly avg air time : ", formattedData);

    } catch (error) {
      console.error("Error in fetching hourly avg air timee:", error);
    }
  }

  useEffect(() => {
    fetchTotalCalls();
    fetchCallsPicked();
    fetchLifeTotalCalls();
    fetchLifePickedCalls();

    fetchHourTotalDuration();
    fetchTotalAvgDuration();
    fetchTotalDuration();
    fetchHourlyAvgDuration();

    fetchLifeAvgHoldTime();
    fetchLifeAvgAirTime();
    fetchHourAvgHoldTime();
    fetchHourAvgAirTime();
  }
    , []);
  return (
    <>

      <>
        <div className="grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3">

          <Chart3
            title="Average Call Duration"
            total={`${totalAvgDuration} seconds`}
            percentageChange="+5.12"
            strokeColor="#2E47F9"
            data={C2Data}
            plotData={hourlyAvgDuration}

                />
               <RevenueCard head1="Total Calls" data1={totalCalls} head2="Picked Calls" data2={callsPicked}/>
               <RevenueCard head1="Average Hold Time" data1 = {hourAvgHoldTime} head2="Average Air Time" data2 = {hourAvgAirTime} />  
              </div>
              <ChartCall4  totalCalls={totalCalls} pickedCalls={callsPicked} durationData={hourTotalDuration} 
              holdTimeData={hourAvgHoldTime} airTimeData={hourAvgAirTime} />
            </> 
      
      </>
    )
  }
  
  export default Page