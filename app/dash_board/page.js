"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DashInfo from "@/component/04/dashInfo";
import DashEventCalendar from "@/component/04/dashEventCalender";
import DashFinanceChart from "@/component/04/dashFinanceChart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { redirect } from 'next/navigation';

export default function PageDashboard() {
  //  redirect('/login');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex md:flex-row flex-col gap-4 p-4">
      <div className="w-full lg:w-3/3 col-span-2">
        <span className="text-sm font-bold leading-2 text-gray-500">
          Welcome {user?.displayName || user?.email || "User"}
        </span>
        {/* dashboard information */}
        <div className="flex justify-between gap-4 mt-3">
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
