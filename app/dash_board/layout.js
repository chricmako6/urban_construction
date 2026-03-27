"use client";
import DashNav from "@/component/04/dashNav";
import DashSide from '@/component/04/dashSide'
// import { PiDotsThreeOutlineBold } from 'react-icons/pi';

export default function DashboardLayout({children}) {
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center">
//         <div className="text-gray-700 flex items-center">
//           Loading<span className='animate-pulse ml-1'><PiDotsThreeOutlineBold className="w-10 h-10"/></span>
//         </div>
//       </div>
//     )
//     }
// 
// 

  return (
    <div className="flex h-auto text-gray-900">
        <DashSide />
      <main className="w-[86%] md:w-[90%] lg:w-[84%] bg-[#f7f8fa]">
        <DashNav />
        {children}
      </main>
    </div>
  );
}