import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
       <div className='col-span-3 border-r'>
        <Link href={"/"} className="text-lg font-semibold">🐸 Dev Story</Link>

        <div className='flex flex-col mt-10 space-y-5'>
            <Link className='bg-gray-300 px-4 py-3 text-l font-semibold mr-3 border-gray-400' href={"/dashboard/add-story"}>Add Story</Link>
            <Link className='bg-gray-300 px-4 py-3 text-l font-semibold mr-3 border-gray-400' href={"/dashboard/my-profile"}>My Profile</Link>
            <Link className='bg-gray-300 px-4 py-3 text-l font-semibold mr-3 border-gray-400' href={"/dashboard/settings"}>Settings</Link>
        </div>
       </div>
       <div className='col-span-9'>{children}</div>
        </div>
    );
};

export default DashboardLayout; 