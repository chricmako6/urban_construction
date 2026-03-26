import React from 'react'
import DashInfo from '@/component/04/dashInfo'
import DashCountChart from '@/component/04/dashCountChart'
import DashEventCalendar from '@/component/04/dashEventCalender'
import DashFinanceChart from '@/component/04/dashFinanceChart'



export default function PageDashboard(){
    return (
        <div className='flex md:flex-row flex-col gap-4 p-4'>

            <div className='w-full lg:w-2/3 col-span-2 '>
                {/* dashboard information */}
                <div className='flex justify-between gap-4'>
                 <DashInfo/>
                </div>

                {/* middle dashboard information */}
                <div className='flex gap-4 flex-col lg:flex-row mt-10'>
                    <div className='w-full lg:w-1/3 h-112.5 '>
                     <DashCountChart/>
                    </div>
                </div>

                {/* dashboard attendance information */}
                <div className='w-full'>
                </div>

                 {/* BOTTOM CHART */}
                <div className="w-full h-125 mt-10">
                    <DashFinanceChart/>
                </div>
            </div>
            
            {/* RIGHT */}
            <div className='w-full lg:w-1/3 flex-col gap-8'>
                <DashEventCalendar/>
            </div>
        </div>
    );

}
