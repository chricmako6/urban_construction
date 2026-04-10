"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DashInfo from "@/component/04/dashInfo";
import DashEventCalendar from "@/component/04/dashEventCalender";
import DashFinanceChart from "@/component/04/dashFinanceChart";
// import { redirect } from 'next/navigation';

export default function PageDashboard() {
  //  redirect('/login');

  return (
    <div className="flex md:flex-row flex-col gap-4 p-4">
      <div className="w-full lg:w-3/3 col-span-2">
        {/* dashboard information */}
        <div className="flex justify-between gap-4">
          <DashInfo />
        </div>

        {/* BOTTOM CHART */}
        <div className="w-full h-125 mt-10">
          <DashFinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex-col gap-8">
        <DashEventCalendar />
      </div>
    </div>
  );
}
