

"use client";

import React from 'react'
import DynamicTable from '../components/DynamicTable';
import { tableData2, tableHeadings2 } from '../CRM_data';


const page = () => {
  return (
    <>
    {/* Dashboard */}
    <DynamicTable headings={tableHeadings2} data={tableData2} />
    </>
  )
}

export default page