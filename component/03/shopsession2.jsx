"use client";
import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link';
import axios from 'axios';
import Pagination from '@/component/03/pagination';
import {motion} from 'framer-motion'
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from 'react-icons/fa'
import { MdApartment, MdBedroomChild, MdOutlineBathroom } from 'react-icons/md'
import { PiMapPinAreaDuotone } from 'react-icons/pi'
import { CiLineHeight } from "react-icons/ci";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { TiShoppingCart } from 'react-icons/ti';
import { StoreContext } from '@/app/hooks/context/StoreContext';

function Shopsession2() {
  const { addProduct, products } = useContext(StoreContext);
  
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true);

  const [sortOrder, setSortOrder] = useState("old");
  const [showSort, setShowSort] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://jenganasisi-backend.vercel.app/api/products");
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "old") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <div>
      {/* SORT */}
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

      {/* PRODUCTS */}
      <div className='w-full mt-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-white p-5 rounded-xl shadow'>
          {currentItems.map((item) => {

            const isInCart = products.some((product) => product.id === item.id);

            return (
              <div key={item.id} className='bg-white rounded-xl shadow-md relative'>

                {/* FIXED BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group absolute md:top-52 top-40 right-4"
                >
                  <button
                    disabled={isInCart}
                    onClick={() => addProduct(item)}
                    className={`group/btn flex items-center gap-3 px-3 sm:px-4 py-2 rounded-md font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 ${
                      isInCart
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#ffd061] hover:bg-[#f5c84a] text-black cursor-pointer"
                    }`}
                  >
                    <span className="hidden sm:inline">
                      {isInCart ? "Added" : "Add Cart"}
                    </span>

                    <motion.span
                      className={`inline-flex items-center group-hover/btn:rotate-45 transition-transform duration-300 justify-center p-1 rounded-sm ${
                        isInCart ? "bg-gray-400" : "bg-[#383635]"
                      }`}
                      whileHover={!isInCart ? { rotate: 45 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <TiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.span>
                  </button>
                </motion.div>

                {/* IMAGE */}
                <Link href={`/shop/${item?.id}`}>
                  <img
                    src={item.images?.[0] || "/fallback.jpg"}
                    alt={item.name}
                    className='h-56 sm:h-64 md:h-70 w-full shadow-md rounded-t-xl bg-gray-200 object-cover'
                  />
                </Link>

                {/* DETAILS */}
                <div className='p-3'>
                  <Link href={`/shop/${item?.id}`}>
                    <h2 className='font-bold'>
                      {item.name}{item?.id ? ` - ID: ${item.id}` : ''}
                    </h2>
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

                {/* FEATURES */}
                <div className="grid grid-cols-3 p-2 gap-2">
                  <div className="mx-auto text-xs w-20">
                    <MdApartment className='w-6 h-6 mx-auto'/>
                    <p className="text-center my-1.5">{item.floor} Floors</p>
                  </div>

                  <div className="mx-auto text-xs w-20 border-r border-l border-gray-400">
                    <MdBedroomChild className='w-6 h-6 mx-auto'/>
                    <p className="text-center my-1.5">{item.bedrooms} Bedrooms</p>
                  </div>

                  <div className="mx-auto text-xs w-20">
                    <MdOutlineBathroom className='w-6 h-6 mx-auto'/>
                    <p className="text-center my-1.5">{item.bathrooms} Bathrooms</p>
                  </div>

                  <div className="mx-auto text-xs w-20">
                    <CiLineHeight className='w-6 h-6 mx-auto' />
                    <p className="text-center my-1.5">{item.length} m</p>
                  </div>

                  <div className="mx-auto text-xs w-20 border-r border-l border-gray-400">
                    <AiOutlineColumnWidth className='w-6 h-6 mx-auto'/>
                    <p className="text-center my-1.5">{item.width} m</p>
                  </div>

                  <div className="mx-auto text-xs w-20">
                    <PiMapPinAreaDuotone className='w-6 h-6 mx-auto'/>
                    <p className="text-center my-1.5">{item.area}</p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* PAGINATION */}
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

export default Shopsession2;