"use client";
import React from "react";
import { BiArrowToTop } from "react-icons/bi";

function Pagination({ currentPage, totalPages, onPageChange }) {

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-5 mt-4">

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-3 rounded-full ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer"
        }`}
      >
        <BiArrowToTop className="w-5 h-5 -rotate-90"/>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-4 py-2 rounded-md ${
              currentPage === number
                ? "bg-gray-800 text-white cursor-pointer"
                : "bg-gray-100 hover:bg-white cursor-pointer"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-full ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer"
        }`}
      >
        <BiArrowToTop className="w-5 h-5 rotate-90"/>
      </button>

    </div>
  );
}

export default Pagination;
