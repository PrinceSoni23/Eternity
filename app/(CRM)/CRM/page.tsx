

"use client";

import React from 'react'
import Chart3 from './components/Chart3';
import RevenueCard from './components/RevenueCard';
import { callData, CData, messageData, visitorData } from './CRM_data';
import Chart2 from './components/Chart2';
import Table1 from './components/Table1';

const page = () => {
  return (
    <>
    
    <div className="grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3">
                                <Chart3 title="Your Average Score" totalRevenue={"73.28"} percentageChange="+20.23" strokeColor="#2E47F9" data={CData} />
                                <RevenueCard data={visitorData} />
                                <Chart2 />
                            </div>
                            <div className="w-full h-auto mt-4">
                                <Table1 callData={callData} messageData={messageData} />
                            </div>
    </>
  )
}

export default page