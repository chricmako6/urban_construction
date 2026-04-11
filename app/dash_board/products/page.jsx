"use client";

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { FaEdit, FaEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

// const API = "http://localhost:4000/api/products";
const API = "https://jenganasisi-backend.vercel.app/api/products";

const getStatusStyle = (status) => {
  switch (status) {
    case "Published":
      return "bg-green-100 text-green-700";
    case "Inactive":
      return "bg-red-100 text-red-600";
    case "Draft":
      return "bg-gray-200 text-gray-600";
    default:
      return "bg-yellow-100 text-yellow-700";
  }
};

export default function pageProduct() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

 // FETCH ALL PRODUCTS
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(API);

      const data = res.data?.products || res.data;

      setProducts(data);
      setFiltered(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setProducts([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  // SEARCH API
const searchProducts = useCallback(async (query) => {
  try {
    setLoading(true);

    let res;

    // IF looks like ID (long string)
    if (query.length > 10 && !query.includes(" ")) {
      res = await axios.get(`${API}/${query}`);
      const data = res.data;
      setFiltered(data ? [data] : []);
    }

    //  DEFAULT → NAME SEARCH
    else if (query.trim().toLowerCase() !== "") {
      res = await axios.get(
        `${API}/search?name=${query}`
      );

      const data = res.data?.products || res.data;

      setFiltered(data);
    }

    setCurrentPage(1);
  } catch (err) {
    console.error("Search error:", err);
    setFiltered([]);
  } finally {
    setLoading(false);
  }
}, []);

  // INITIAL LOAD
  useEffect(() => {
    fetchProducts();
  }, []);

  // HANDLE SEARCH + FILTER
useEffect(() => {
  if (search) {
    const delay = setTimeout(() => {
      searchProducts(search);
    }, 500);

    return () => clearTimeout(delay);
  } else {
    setFiltered(products);
  }
}, [search, products, searchProducts]);

  useEffect(() => {
    let data = [...products];

    if (statusFilter) {
      data = data.filter((item) => item.status === statusFilter);
    }

    setFiltered(data);
    setCurrentPage(1);
  }, [statusFilter, products]);


  // PAGINATION
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 m-5">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h2 className="text-lg font-semibold">Products List</h2>

        <button className="px-4 py-2 cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] rounded-md font-semibold">
          <Link href="/dash_board/product-add">
            + Add Product
          </Link>
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div className="flex items-center border rounded-md px-3 py-2 w-full md:w-72">
          <FiSearch />
          <input
            type="text"
            placeholder="Search product..."
            className="ml-2 outline-none focus:ring-1 focus:ring-[#ffd061] w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border px-3 py-2 rounded-md text-sm"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Published">Published</option>
          <option value="Inactive">Inactive</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto h-125">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-center">Category</th>
              <th className="p-3 text-center">Stock</th>
              <th className="p-3 text-center">Price</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-6">
                  <div className="flex justify-center">
                    <div className="w-8 h-8 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </td>
              </tr>
            ) : currentData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-red-600">
                  No products found
                </td>
              </tr>
            ) : (
              currentData.map((item) => (
                <tr key={item.id || item._id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={item.image || "/placeholder.png"}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <span className="font-medium">{item.name}</span>
                  </td>

                   <td className="p-3 text-gray-600 text-left">{item?.id || item._id}</td>

                  <td className="p-3 text-gray-600 text-left">{item.categories}</td>

                  <td className="p-3 text-center">
                    <span
                      className={`${
                        item.stock === 0
                          ? "text-red-500"
                          : item.stock < 20
                            ? "text-yellow-600"
                            : "text-gray-700"
                      }`}
                    >
                      {item.stock === 0
                        ? "Out of Stock"
                        : item.stock < 20
                          ? "Low Stock"
                          : item.stock}
                    </span>
                  </td>

                  <td className="p-3 text-center">{item.price}</td>

                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-3 text-right">
                    <div className="relative group">
                      <button className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <FiMoreHorizontal className="w-5 h-5"/>

                        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                        <div className="py-1">
                          <a
                            href="#"
                            className="hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500"
                          >
                            <FaEye className="w-5 h-5" />
                            View
                          </a>
                          <a
                            href="#"
                            className="hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500"
                          >
                            <FaEdit className="w-5 h-5" />
                            Edit
                          </a>
                          
                         
                          <hr className="my-1 border-gray-200" />
                          <a className="font-bold items-center gap-2 flex px-3 py-2 text-xs hover:text-red-600 ">
                            <ImBin className="w-5 h-5" />
                            Delete
                          </a>
                        </div>
                      </div>
                      </button>

                      
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-5 flex-wrap gap-3">
        <p className="text-sm text-gray-500">
          Showing {start + 1} -{" "}
          {Math.min(start + ITEMS_PER_PAGE, filtered.length)} of{" "}
          {filtered.length}
        </p>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded-md text-sm cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`cursor-pointer hover:bg-[#f5c84a] px-3 py-1 rounded-md text-sm ${
                currentPage === i + 1 ? "bg-[#ffd061]  font-semibold" : "border"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded-md text-sm cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
