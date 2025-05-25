'use client';

import type { DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import { ArrowRight } from 'lucide-react';
import {
  walsheim_bold,
  walsheim_thin
} from "@/components/constants";

const initialSteps = [
  { id: '1', title: 'Marketing Call', description: 'Tell about the products and pitch them the idea of the product.<br />  <strong>Target -</strong> Target is to get some interested customers by the end of the call.<br /> <strong>Action Task-</strong> Action task.<br /> <strong>Post Task-</strong> Post task' },
  { id: '2', title: 'Confirm Schedule', description: 'Confirm the customer whether they will attend the demo.<br /> <strong>Target -</strong> Target is to get the Confirmation of the scheduled demo. <br /><strong>Action Task-</strong> Action task. <br /><strong>Post Task-</strong> Post task' },
  { id: '3', title: 'Feedback', description: 'Collect feedback from the user about the demo and ask them to purchase.<br /> <strong>Target -</strong> Target is to get some interested customers by the end of the call.<br /> <strong>Action Task-</strong> Action task.<br /> <strong>Post Task-</strong> Post task' },
  { id: '4', title: 'Close Lead', description: 'Try to persuade the user to buy the product and finally close the lead.<br /> <strong>Target -</strong> Target is to get some interested customers by the end of the call.<br /> <strong>Action Task-</strong> Action task. <br /><strong>Post Task-</strong> Post task' },
];

const DraggableActionFlow = () => {
  const [steps, setSteps] = useState(initialSteps);

  const handleDragEnd = (event: DragEndEvent)  => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSteps((prev) => {
        const oldIndex = prev.findIndex((step) => step.id === active.id);
        const newIndex = prev.findIndex((step) => step.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="relative mt-10 max-w-7xl h-auto mx-auto font-sans border-b-4 bg-[#E7E5FF] dark:bg-slate-500 shadow-lg rounded-xl border-2 border-gray-500 p-6">
      <div className="relative mx-auto w-fit -mt-[27px]">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="10,100 20,1100 100,0 0,0"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <div
          className={`relative dark:bg-gray-800 dark:text-white bg-white px-6 py-3 shadow-none border-b-2 border-black text-black text-xl font-bold ${walsheim_bold.className}`}
          style={{
            clipPath: "polygon(0% 100%, 20% 1000%, 100% 0%, 0% 0%)",
            WebkitClipPath: "polygon(10% 100%, 30% 1000%, 100% 0%, 0% 0%)",
          }}
        >
          Actions
        </div>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={steps} strategy={horizontalListSortingStrategy}>
          <div className="flex justify-between items-center gap-4 p-8 w-full flex-wrap sm:flex-nowrap">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-col sm:flex-row">
                <SortableItem id={step.id}>
                  <div className="bg-[#4A3E6B] text-white p-3 rounded-[24] h-48 w-44 sm:-ml-4 shadow-md flex flex-col justify-center">
                    <h3 className={`text-[14px] font-semibold text-center ${walsheim_bold.className}`}>{step.title}</h3>
                    <p className={`text-[12px] mt-2 text-center ${walsheim_thin.className}`}>
                      <span dangerouslySetInnerHTML={{ __html: step.description }} />
                    </p>
                  </div>
                </SortableItem>
                {index !== steps.length - 1 && <ArrowRight className="w-5 h-5 text-gray-500 dark:text-white mx-1 sm:block" />}
              </div>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DraggableActionFlow;
