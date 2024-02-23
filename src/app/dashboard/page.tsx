import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="text-black container bg-cyan-800 mx-auto my-5 p-10 space-y-10 rounded-2xl max-h-[50rem]">
      <div className="flex flex-row space-x-10">

        <div className='container p-6 bg-white flex flex-col rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105'>
          <SchoolIcon style={{ color: 'black', width: '6rem', height: '6rem', margin: 'auto' }} />
          <div className="mx-auto">Curriculum</div>
          <hr class="w-48 h-1 mx-auto my-0 bg-black border-0 rounded md:my-1 dark:bg-gray-700"></hr>
          <h6 className="text-slate-600">Design Curriculum, Specify POs, Design Courses, Specify and map COs-POs etc.</h6>
        </div>

        <div className='container p-6 bg-white flex flex-col rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105'>
          <EmojiEventsIcon style={{ color: 'black', width: '6rem', height: '6rem', margin: 'auto' }} />
          <div className="mx-auto">Attainment</div>
          <hr class="w-48 h-1 mx-auto my-0 bg-black border-0 rounded md:my-1 dark:bg-gray-700"></hr>
          <h6 className="text-slate-600">Define threshold levels, Check course/program/consolidated Attainment</h6>
        </div>
      </div>

      <div className='flex flex-row space-x-10'>
        <div className='container p-6 bg-white flex flex-col rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105'>
          <AnalyticsIcon style={{ color: 'black', width: '6rem', height: '6rem', margin: 'auto' }} />
          <div className="mx-auto">Resources</div>
          <hr class="w-48 h-1 mx-auto my-0 bg-black border-0 rounded md:my-1 dark:bg-gray-700"></hr>
          <h6 className="text-slate-600">Watch video tutorials, read books, know how to use this system as an educator</h6>
        </div>
        <div
          // onClick={() => { navigate('./profile') }}
          className='container p-6 bg-white flex flex-col rounded-2xl hover:bg-gray-100 hover:shadow-2xl hover:scale-105'>
          <AccountBoxIcon style={{ color: 'black', width: '6rem', height: '6rem', margin: 'auto' }} />
          <div className="mx-auto">Profile</div>
          <hr class="w-48 h-1 mx-auto my-0 bg-black border-0 rounded md:my-1 dark:bg-gray-700"></hr>
          <h6 className="text-slate-600">Manage profile, view academic details, edit user details</h6>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;