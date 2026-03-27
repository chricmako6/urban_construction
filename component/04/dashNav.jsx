"use client";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from 'react-icons/fa';
import { BiSolidMessageAltDetail, BiSupport } from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { TbMessage } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function DashNav() {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* SEARCHING BAR */}
      <div className="hidden md:flex items-center bg-gray-200 p-2 rounded-xl ring-gray-300 px-2">
        <IoSearch 
        className='w-5 h-5'/>
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 p-1 w-96 border-none bg-transparent focus:outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className='flex items-center gap-4 justify-end w-full'>
        <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
          <TbMessage 
          className="w-6 h-6"/>
        </div>

        <div className='relative bg-white rounded-full w-8 h-8 flex items-center justify-center'>
          <FaRegBell 
          className="w-6 h-6"/>

          <div className='absolute -right-1 -top-2  w-4 h-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full'>
            1
          </div>
        </div>

        <div className='relative group flex gap-2 cursor-pointer'>
          <div className="flex flex-col">
            <span className='text-xs leading-2 mt-2 font-bold'>User</span>
            <span className='text-xs leading-2 text-gray-500 my-2'>Welcome User</span>
          </div>
          <CgProfile 
          className='bg-white rounded-full w-10 h-10 object-cover'
          onError={(e) => {
              e.target.onerror = null;
            }}/>
        
           {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
            <div className="py-1">
              <a href="/dashboard/profile" className="hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500">
                <FaUserAlt className='w-5 h-5' />
                Profile
              </a>
              <a href="/dashboard/#" className="hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500">
                <BiSolidMessageAltDetail className='w-5 h-5' />
                Inbox
              </a>
              <a href="/dashboard/setting" className="hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500">
                <IoSettingsSharp className='w-5 h-5'/>
                Setting
              </a>
              <a href="/dashboard/#" className="hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500">
                <BiSupport className='w-5 h-5' />
                Support
              </a>
              <hr className="my-1 border-gray-200" />
              <a className="font-bold items-center gap-2 flex px-3 py-2 text-xs hover:text-red-600 ">
                <RiLogoutCircleLine className='w-5 h-5'/>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashNav;