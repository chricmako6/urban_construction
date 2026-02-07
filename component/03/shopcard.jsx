import React from 'react'
import Link from 'next/link'
import { FaRegStar } from 'react-icons/fa'
import { MdApartment, MdBedroomChild, MdOutlineBathroom } from 'react-icons/md'
import { PiMapPinAreaDuotone } from 'react-icons/pi'
import { CiLineHeight } from "react-icons/ci";
import { AiOutlineColumnWidth } from "react-icons/ai";

function Shopcard({ items }) {
  return (
    <div className='grid grid-cols-3 justify-between gap-5 bg-white p-3 rounded-xl shadow'>
      {items.map((item) => (
        <div key={item.id} className='bg-white rounded-xl shadow-md relative'>
          <span className='absolute px-4 text-shadow-sm font-bold text-white left-40 top-56 p-2 rounded-full bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer'>
            <Link href={`/shop/${item?.id}`}>+Quick Buy</Link>
          </span>

          <img
            src={item.image}
            alt={item.title}
            className='h-70 w-full rounded-t-xl bg-gray-200 object-cover'
          />

          <div className='p-3'>
            <h2 className='font-bold'>{item.title}</h2>
            <p className='flex justify-between'>
              <span className='my-2'>From {item.price}</span>
              <span className='flex gap-1'>
                <FaRegStar className='w-5 h-5 cursor-pointer' />
                <FaRegStar className='w-5 h-5 cursor-pointer' />
                <FaRegStar className='w-5 h-5 cursor-pointer' />
              </span>
            </p>
          </div>
          <div className="grid grid-cols-3 p-2 gap-2">
            <div className="mx-auto text-xs p-1  w-20">
              <MdApartment className='w-6 h-6 mx-auto cursor-pointer'/>
              <p className="text-center my-1.5">{item?.floors} Floors</p>
            </div>

            <div className="mx-auto text-xs p-1  w-20 border-r border-l border-gray-400">
              <MdBedroomChild className='w-6 h-6 mx-auto cursor-pointer'/>
              <p className="text-center my-1.5">{item?.bedroom} Bedrooms</p>
            </div>

            <div className="mx-auto text-xs p-1  w-20">
              <MdOutlineBathroom className='w-6 h-6 mx-auto cursor-pointer'/>
              <p className="text-center my-1.5">{item?.bathroom} Bathrooms</p>
            </div>

             <div className="mx-auto w-20 text-xs p-1 ">
              <CiLineHeight className='w-6 h-6 mx-auto cursor-pointer' />
              <p className="text-center my-1.5">{item?.height} m</p>
            </div>

            <div className="mx-auto text-xs p-1  w-20 border-r border-l border-gray-400">
              <AiOutlineColumnWidth className='w-6 h-6 mx-auto cursor-pointer'/>
              <p className="text-center my-1.5">{item?.width} m</p>
            </div>

            <div className="mx-auto text-xs p-1  w-20">
              <PiMapPinAreaDuotone className='w-6 h-6 mx-auto cursor-pointer'/>
              <p className="text-center my-1.5">{item?.area} Area</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shopcard
