"use client";
import React from "react";
import { BiArrowToTop } from "react-icons/bi";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <span className="flex justify-center mx-auto gap-5 mt-4 w-33 border border-white rounded-full">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-3 rounded-full text-sm ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#ffd061] text-gray-700 hover:bg-[#f5c84a] shadow-2xl cursor-pointer"
        }`}
      >
        <BiArrowToTop className="w-5 h-5 -rotate-90"/>
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 rounded-md text-sm ${
              currentPage === number
                ? "text-gray-200 bg-gray-800 cursor-pointer"
                : "hover:bg-white text-gray-700 bg-gray-100 cursor-pointer"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        // onClick={() => onPageChange(currentPage + 1)}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-full text-sm ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#ffd061] text-gray-700 hover:bg-[#f5c84a] shadow-2xl cursor-pointer"
        }`}
      >
        <BiArrowToTop className="w-5 h-5 rotate-90"/>
      </button>
    </span>
  );
}

export default Pagination;