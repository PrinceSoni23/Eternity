"use client";

import React, { useEffect, useState } from 'react'
import RevenueCard from './components/RevenueCard';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import { CData } from './dashboard_data';
import Chart4 from "./components/Chart4";
//------------- REDUX GTM ----------------
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';

import { formatLabel } from '@/utilities/formatLabel';
import { useFormattedData } from "@/hooks/useFormattedData";


const companyID = "67bf3f4d011d613e796048fa";
const Page = () => {
  // const dispatch = useDispatch();
  const [, setImpressionData] = useState<any>([]);
  const [uniqueImpressionData, setUniqueImpressionData] = useState<any>([]);
  const [totalImpressionData, setTotalImpressionData] = useState<any>([]);
  const [, setTotalTransactions] = useState<any>([]);
  const [totalRevenue, setTotalRevenue] = useState<any>([]);
  const [allTransactions, setAllTransactions] = useState<any>([]);
  const [individualTotalTxns, setIndividualTotalTxns] = useState<any>([]);
  const [totalPeopleConnected, setTotalPeopleConnected] = useState<any>([]);
  const [allConnections, setAllConnections] = useState<any>([]);
  // const userData = useSelector((state: RootState) => state.auth?.user);
  // console.log("User data - ", userData)

  const fetchImpressionData = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-all-impressions/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch impressions data.");
      }

      const data = await response.json();
      //console.log("Impressions data : ", data);
      setImpressionData(data.data[0].hourData);
      console.log("Impressions data : ", data.data[0].hourData);
    } catch (error) {
      console.error("Error in fetching impressions data:", error);
    }
  }
  const fetchUniqueImpressionData = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-hourly-unique-impressions/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch impressions data.");
      }

      const data = await response.json();
      // setImpressionData(data.data);
      console.log("Unique Impressions data : ", data?.uniqueImpressions);
      setUniqueImpressionData(data?.uniqueImpressions);
    } catch (error) {
      console.error("Error in fetching impressions data:", error);
    }
  }
  const fetchTotalImpressionData = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-hourly-total-impressions/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch impressions data.");
      }

      const data = await response.json();
      // setImpressionData(data.data);
      console.log("Total Impressions data : ", data?.totalImpressions);
      setTotalImpressionData(data?.totalImpressions);
    } catch (error) {
      console.error("Error in fetching impressions data:", error);
    }
  }


  const fetchTotalTransactions = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/revenues/get-total-transactions/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch impressions data.");
      }

      const data = await response.json();
      //console.log("TOTAL TXNS : ", data);
      setTotalTransactions(data?.totalTransactions);

    } catch (error) {
      console.error("Error in fetching total txns data:", error);
    }
  }
  const fetchTotalRevenue = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/revenues/get-total-revenue/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch impressions data.");
      }

      const data = await response.json();
      console.log("TOTAL REVENUE : ", data);
      setTotalRevenue(data?.totalRevenue);
    } catch (error) {
      console.error("Error in fetching total revenue data:", error);
    }
  }
  const fetchAllTransactions = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/revenues/get-all-transaction-data/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch impressions data.");
      }

      const data = await response.json();
      //console.log("ALL TXN DATA : ", data);

      const formattedTxnData = data?.amountData?.map((amt: string) => {
        return {
          label: "gtm", 
          data: amt,
        };
      })
      setAllTransactions(formattedTxnData);
      console.log("FORMATTED TXN DATA : ", formattedTxnData);
    } catch (error) {
      console.error("Error in fetching all txn data:", error);
    }
  }


  const fetchIndividualTotalTxns = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/individuals/get-total-transactions/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch individual txn data.");
      }

      const data = await response.json();
      //console.log("→ TOTAL IND TXNS : ", data?.data);
      setIndividualTotalTxns(data?.data);

    } catch (error) {
      console.error("Error in fetching individual total txns data:", error);
    }
  }
  const fetchTotalPeopleConnected = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/individuals/get-total-people-connected/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch total people connected data.");
      }

      const data = await response.json();
      console.log("→ TOTAL PEOPLE CONNECTED : ", data.totalConnected);
      setTotalPeopleConnected(data?.totalConnected);
    } catch (error) {
      console.error("Error in fetching total people connected data:", error);
    }
  }
  const fetchAllConnections = async () => {
    try {
      // const response = await fetch(`http://localhost:8000/api/v1/dashboard/impressions/get-impressions/${userData?.company}?filter=${filter}`, {
      const response = await fetch(`http://localhost:8000/api/v1/dashboard/individuals/get-Total-connections/${companyID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        //console.log("Error data - ", errorData)
        throw new Error(errorData?.message || "Failed to fetch all connections data.");
      }

      const data = await response.json();
      console.log("→ ALL CONNECTIONS : ", data?.data);
      // const formattedConnectionData = data?.data?.map((conn: any) => {
      //   return {
      //     label: formatLabel(conn?.dateTime, filter),
      //     data: conn?.totalConnected,
      //   };
      // })
      // console.log("FORMATTED CONNECTION DATA : ", formattedConnectionData);
      setAllConnections(data?.data);
    } catch (error) {
      console.error("Error in fetching all connections data:", error);
    }
  }

  const formattedConnectionData = useFormattedData(allConnections, "totalConnected");
  const formattedUniqueImpressionData = useFormattedData(uniqueImpressionData, "uniqueImpressions");
  const formattedTxnData = useFormattedData(allTransactions, "amount");
  console.log("FORMATTED CONNECTION DATA : ", formattedConnectionData)
  console.log("FORMATTED UNIQUE IMPRESSION DATA : ", formattedUniqueImpressionData)
  console.log("FORMATTED TXN DATA : ", formattedTxnData);

  useEffect(() => {
    // const filter = "hourly";
    fetchImpressionData();
    fetchUniqueImpressionData();
    fetchTotalImpressionData();

    fetchTotalTransactions();
    fetchTotalRevenue();
    fetchAllTransactions();

    fetchIndividualTotalTxns();
    fetchTotalPeopleConnected();
    fetchAllConnections();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3">
        <RevenueCard
          head1='Total Impressions' data1={totalImpressionData}
          head2='Unique Impressions' data2={formattedUniqueImpressionData?.map((item: any) => item?.data)}
        />

        <Chart2 totalPpl={totalPeopleConnected} txnPpl={individualTotalTxns} />

        <Chart3
          title="Total Revenue"
          total={`$${totalRevenue}`}
          percentageChange="+20.23"
          strokeColor="#2E47F9"
          data={CData}
          plotData={formattedTxnData}
        />
      </div>

      <Chart4
        impressionData={formattedUniqueImpressionData}
        revenueData={formattedTxnData}
        connectionsData={formattedConnectionData}
      />
    </>
  )
}

export default Page