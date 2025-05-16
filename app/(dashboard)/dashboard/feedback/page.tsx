"use client";

import React, {useState, useEffect} from 'react'
import CustomerGraph from '../components/customergraph';
import { CustomerData, data, data2 } from '../dashboard_data';
import RevenueCard2 from '../components/RevenueCard2';

const companyID = "67bf3f4d011d613e796048fa";

const page = () => {
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [feedbackData, setFeedbackData] = useState([]);
  const [intentCount, setIntentCount] = useState(0);
  const [intentData, setIntentData] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [avgRating, setAvgRating] = useState(0);
  

  const fetchFeedbackCount = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-feedback/feedback-count/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch feedback count.");
        }
  
        const data = await response.json();
        console.log(" ===============  FEEDBACK COUNT ================= ");

        console.log("Feedback count : ", data.data);
        setFeedbackCount(data?.data);
        
      } catch (error: any) {
        console.error("Error in fetching feedback count:", error);
      }
    }
  const fetchFeedbackData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-feedback/feedback-data/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch feedback data.");
        }
  
        const data = await response.json();
     
        console.log("Feedback data : ", data.data);
        const formattedData = data?.data?.map((item: any) => ({
           label : item?.description,
           count : item?.count,
            percentage : parseFloat(item?.percentage),
            color : "#A79AFF"
         }));
    setFeedbackData(formattedData);
        
      } catch (error: any) {
        console.error("Error in fetching feedback data:", error);
      }
    }
  const fetchIntentCount = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-intent/intent-count/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch intent count.");
        }
  
        const data = await response.json();
        console.log(" ===============  CUSTOMER INTENT ================= ");

        console.log("Intent count : ", data.data);
        setIntentCount(data?.data);
                
      } catch (error: any) {
        console.error("Error in fetching intent count:", error);
      }
    }
  const fetchIntentData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-intent/intent-data/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch intent data.");
        }
  
        const data = await response.json();
        console.log("Intent data : ", data.data);
       
        const formattedData = data?.data?.map((item: any) => ({
            label : item?.description,
            count : item?.count,
              percentage : parseFloat(item?.percentage),
              color : "#A79AFF"
          }));

        setIntentData(formattedData);
                
      } catch (error: any) {
        console.error("Error in fetching intent data:", error);
      }
    }

    const fetchTotalReviews = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-review/total-reviews/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch total reviews.");
        }
  
        const data = await response.json();
        console.log(" ===============  CUSTOMER REVIEW ================= ");

        console.log("Total reviews : ", data.data);
                
      } catch (error: any) {
        console.error("Error in fetching total reviews:", error);
      }
    }
    const fetchAvgRating = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-review/average-rating/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch average rating.");
        }
  
        const data = await response.json();
        console.log("Average rating : ", data.data);
                
      } catch (error: any) {
        console.error("Error in fetching average rating:", error);
      }
    }
    const fetchReviewData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/feedback-analytics/customer-review/customer-review-data/${companyID}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.log("Error data - ", errorData)
          throw new Error(errorData?.message || "Failed to fetch customer review data.");
        }
  
        const data = await response.json();
        console.log("Customer review data : ", data.data);
                
      } catch (error: any) {
        console.error("Error in fetching Customer review data:", error);
      }
    }

    useEffect(() => {
      fetchFeedbackCount();
      fetchFeedbackData();

      fetchIntentCount();
      fetchIntentData();

      fetchTotalReviews();
      fetchAvgRating();
      fetchReviewData();

    }
    , []);

  return (
    <>
    
    <div className="w-full h-full p-4"> 
                {/* CustomerGraph Components */}
                <div className="flex flex-wrap w-full h-auto -mt-2"> 
                  {/* Component 1 */}
                  <div className="flex-1 min-w-[300px] lg:w-1/2 p-2">
                    <CustomerGraph
                      title="Customer Feedback"
                      totalIntent={`${feedbackCount} Feedbacks Received`}
                      percentageChange=" +20.23%"
                      data={feedbackData}
                    />
                  </div> 

                  {/* Component 2 */}
                  <div className="flex-1 min-w-[300px] lg:w-1/2 p-2">
                    <CustomerGraph
                      title="Customer Intent"
                      totalIntent={`${intentCount} Customer Intent Detected`}
                      percentageChange="+20.23%"
                      data={intentData}
                    />
                  </div>
                </div> 

                {/* RevenueCard Component */}
                 {/* <div className="grid grid-cols-1 gap-6 p-2 mt-2 ml-2 lg:grid-cols-3">
                  <RevenueCard2 data={CustomerData} />
                </div> */}
              </div>
              
    </>
  )
}

export default page