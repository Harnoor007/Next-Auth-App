"use client"
import { HomeIcon, InboxIcon, HomeModernIcon, AcademicCapIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, ArrowsUpDownIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';

export default function DefaultSidebar() {
  return (
    <div className="shadow-xl z-10 text-slate-700">
      <div className="h-[calc(100vh-2rem)] max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 mx-auto text-xl p-4">Curriculum Page</div>
        <ul>
          <Link href="/organization" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <HomeIcon className="h-5 w-5 mr-2" />
              <span>Organization</span>
            </li>
          </Link>
          <Link href="/department" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <HomeModernIcon className="h-5 w-5 mr-2" />
              <span>Department</span>
            </li>
          </Link>
          <Link href="/program" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <BookmarkIcon className="h-5 w-5 mr-2" />
              <span>Program</span>
            </li>
          </Link>
          <Link href="/design" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              <span>Curriculum</span>
            </li>
          </Link>
          <Link href="/program_outcomes" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
              <span>Program Outcomes</span>
            </li>
          </Link>
          <Link href="/course" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <InboxIcon className="h-5 w-5 mr-2" />
              <span>Course</span>
              <span className="ml-auto">
                
              </span>
            </li>
          </Link>
          <Link href="/course_outcomes" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <GlobeEuropeAfricaIcon className="h-5 w-5 mr-2" />
              <span>Course Outcomes</span>
            </li>
          </Link>
          <Link href="/cos_pos_mapping" passHref>
            <li className="flex items-center mb-1 cursor-pointer hover:bg-blue-300 rounded-lg p-2">
              <ArrowsUpDownIcon className="h-5 w-5 mr-2" />
              <span>COs POs Mapping</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
