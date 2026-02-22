"use client";
import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link';
import Pagination from '@/component/03/pagination';
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from 'react-icons/fa'
import { MdApartment, MdBedroomChild, MdOutlineBathroom } from 'react-icons/md'
import { PiMapPinAreaDuotone } from 'react-icons/pi'
import { CiLineHeight } from "react-icons/ci";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { shopItems } from '@/app/utilities/data';
import { TiShoppingCart } from 'react-icons/ti';
import { StoreContext } from '@/app/hooks/context/StoreContext';

function Shopsession2({item}) {
  const { addProduct } = useContext(StoreContext);

  const handleAdd = () => {
      addProduct(item);
  }

  const [sortOrder, setSortOrder] = useState("old");
  const [showSort, setShowSort] = useState(false);


 const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // small screens
      } else {
        setItemsPerPage(9); // large screens (default)
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = Math.ceil(shopItems.length / itemsPerPage);
  const sortedItems = [...shopItems].sort((a, b) => {
  if (sortOrder === "old") {
    return new Date(a.date) - new Date(b.date);
  } else {
    return new Date(b.date) - new Date(a.date);
  }
});

const totalPages = Math.ceil(sortedItems.length / itemsPerPage);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentItems = shopItems.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top:400, behavior: "smooth" });
  };

  return (
    <div>

      <div className='flex justify-end items-center gap-2 relative'>
        <span className='font-bold'>Sort by :</span>

        <div className='relative'>
          <div
            onClick={() => setShowSort(!showSort)}
            className='flex items-center gap-2 cursor-pointer'
           >
            <span>
              {sortOrder === "old" ? "Date, Old to New" : "Date, New to Old"}
            </span>

            <span className='rounded-full bg-[#ffd061] hover:bg-[#f5c84a] p-2'>
              <IoIosArrowDown
                className={`transition-transform ${showSort ? "rotate-180" : ""}`}
              />
            </span>
          </div>

          {showSort && (
            <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-50'>
              <button
                onClick={() => {
                  setSortOrder("old");
                  setShowSort(false);
                }}
                className='block cursor-pointer w-full text-left px-3 my-1.5 py-2 hover:bg-[#f5c84a] bg-gray-100 rounded'
              >
                Date, Old to New
              </button>

              <button
                onClick={() => {
                  setSortOrder("new");
                  setShowSort(false);
                }}
                className='block cursor-pointer w-full text-left px-3 my-1.5 py-2 hover:bg-[#f5c84a] bg-gray-100 rounded'
              >
                Date, New to Old
              </button>
            </div>
          )}
        </div>
      </div>

      <div className='w-full mt-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-white p-5 rounded-xl shadow'>
          {currentItems.map((item) => (
            <div key={item.id} className='bg-white rounded-xl shadow-md relative'>
              
              <span 
              onClick={() => addProduct(item)}
              className='absolute px-4 font-bold text-white lg:left-38 left-52 lg:top-56 top-40 p-2 rounded-full bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer'>
                <span className='flex'>
                  Add Cart
                  <TiShoppingCart className="left-2 w-5 h-5"/>
                </span>
              </span>

              <Link href={`/shop/${item?.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className='h-56 sm:h-64 md:h-70 w-full shadow-md rounded-t-xl bg-gray-200 bg-center object-cover'
              />
              </Link>
              
              <div className='p-3'>
                <Link href={`/shop/${item?.id}`}>
                 <h2 className='font-bold'>{item.title}{item?.id ? ` - ID: ${item.id}` : ''}</h2>
                </Link>
                <p className='flex justify-between items-center mt-2'>
                  <span className='my-2'>From {item.price}</span>
                  <span className='flex gap-1'>
                    <FaRegStar className='w-5 h-5'/>
                    <FaRegStar className='w-5 h-5'/>
                    <FaRegStar className='w-5 h-5'/>
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-3 p-2 gap-2">
                <div className="mx-auto text-xs w-20">
                  <MdApartment className='w-6 h-6 mx-auto'/>
                  <p className="text-center my-1.5">{item?.floors} Floors</p>
                </div>

                <div className="mx-auto text-xs w-20 border-r border-l border-gray-400">
                  <MdBedroomChild className='w-6 h-6 mx-auto'/>
                  <p className="text-center my-1.5">{item?.bedroom} Bedrooms</p>
                </div>

                <div className="mx-auto text-xs w-20">
                  <MdOutlineBathroom className='w-6 h-6 mx-auto'/>
                  <p className="text-center my-1.5">{item?.bathroom} Bathrooms</p>
                </div>

                <div className="mx-auto text-xs w-20">
                  <CiLineHeight className='w-6 h-6 mx-auto' />
                  <p className="text-center my-1.5">{item?.height} m</p>
                </div>

                <div className="mx-auto text-xs w-20 border-r border-l border-gray-400">
                  <AiOutlineColumnWidth className='w-6 h-6 mx-auto'/>
                  <p className="text-center my-1.5">{item?.width} m</p>
                </div>

                <div className="mx-auto text-xs w-20">
                  <PiMapPinAreaDuotone className='w-6 h-6 mx-auto'/>
                  <p className="text-center my-1.5">{item?.area}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className='mt-6'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Shopsession2
