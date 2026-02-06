import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Shopcard from './shopcard';
import Pagination from '@/component/03/pagination';
import { shopItems } from '@/data';

function Shopsession2() {



  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = shopItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className='flex justify-end items-center gap-2'>
        <span className='font-bold'>Sort by : </span> Date, Old to New
        <span className='rounded-full bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer p-2'>
          <IoIosArrowDown className='font-bold hover:rotate-180'/>
        </span>
      </div>

      <div className='w-full mt-5'>
        <Shopcard items={currentItems} />
      </div>

      <div className='mx-auto'>
        <Pagination
          totalItems={shopItems.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default Shopsession2
