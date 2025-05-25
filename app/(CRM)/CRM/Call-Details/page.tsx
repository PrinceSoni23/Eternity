

"use client";

import React from 'react'
import DynamicTable from '../components/DynamicTable';
import { tableData, tableHeadings } from '../CRM_data';


const page = () => {
  return (
    <>
    {/* Dashboard */}
    <DynamicTable headings={tableHeadings} data={tableData} />
    </>
  )
}

export default page