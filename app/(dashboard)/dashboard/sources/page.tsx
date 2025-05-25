

"use client";

import React from 'react'
import Bar2 from '../components/bar2';
import LineChart from '../components/Sources/LineChart';


const page = () => {
  return (
    <>
    
    <div className="grid grid-cols-1 p-2 gap-6 h-1/2 w-1/3 mt-2 lg:grid-cols-3">
                <Bar2 />
              </div>
              <div className="w-full mt-6 p-2 h-3/6">
                <LineChart />
              </div>
    
    </>
  )
}

export default page