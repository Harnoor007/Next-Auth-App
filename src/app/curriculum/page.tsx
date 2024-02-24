"use client"
import { useState } from 'react';
import { HomeIcon, InboxIcon, HomeModernIcon, AcademicCapIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, ArrowsUpDownIcon, BookmarkIcon } from "@heroicons/react/24/solid";

import Department from "@/components/curriculumDesign/department"; // Import the Department component
import Co from "@/components/curriculumDesign/co";
import Program from '@/components/curriculumDesign/program';
import Curriculum from '@/components/curriculumDesign/curriculum';
import Po from '@/components/curriculumDesign/po';
import CourseList from '@/components/curriculumDesign/courseList';

export default function DefaultSidebar() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="flex">
      <div className="shadow-xl z-10 text-slate-700 w-[18rem]">
        <div className="h-[calc(100vh-2rem)] max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 mx-auto text-xl p-4">Curriculum Page</div>
          <ul>

            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('organization')}>
              <HomeIcon className="h-5 w-5 mr-2" />
              <span>Organization</span>
            </li>

            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('department')}>
              <HomeModernIcon className="h-5 w-5 mr-2" />
              <span>Department</span>
            </li>

            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('program')}>
            <BookmarkIcon className="h-5 w-5 mr-2" />
              <span>Program</span>

            </li>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('curriculum')}>
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              <span>Curriculum</span>
            </li>

            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('po')}>
              <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
              <span>Program Outcomes</span>
            </li>

            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('course')}>
              <InboxIcon className="h-5 w-5 mr-2" />
              <span>Course</span>
              <span className="ml-auto"></span>
            </li>
            
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2" onClick={() => handleItemClick('co')}>
              <GlobeEuropeAfricaIcon className="h-5 w-5 mr-2" />
              <span>Course Outcomes</span>
            </li>

            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <ArrowsUpDownIcon className="h-5 w-5 mr-2" />
              <span>COs POs Mapping</span>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4">
        {selectedComponent === 'department' && <Department />}
        {selectedComponent === 'program' && <Program />}
        {selectedComponent === 'curriculum' && <Curriculum />}
        {selectedComponent === 'po' && <Po />}
        {selectedComponent === 'course' && <CourseList   />}
        {selectedComponent === 'co' && <Co />}

      </div>
    </div>
  );
}
