"use client";

import React, { useEffect, useState } from "react";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FaEdit, FaEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";

const ITEMS_PER_PAGE = 6;

// RENAME STATIC DATA
const productsData = [
  {
    name: "Casual Sunglass",
    category: "Sunglass",
    stock: "124 Low Stock",
    price: "$47",
    status: "Published",
  },
  {
    name: "T-Shirt",
    category: "Clothes",
    stock: "124",
    price: "$47",
    status: "Published",
  },
  {
    name: "Green Tea",
    category: "Beauty",
    stock: "Out of Stock",
    price: "$47",
    status: "Draft",
  },
  {
    name: "Denim Shirt",
    category: "Clothes",
    stock: "124 Low Stock",
    price: "$47",
    status: "Inactive",
  },
  {
    name: "T-Shirt",
    category: "Clothes",
    stock: "124",
    price: "$47",
    status: "Published",
  },
  {
    name: "Green Tea",
    category: "Beauty",
    stock: "Out of Stock",
    price: "$47",
    status: "Draft",
  },
  {
    name: "Denim Shirt",
    category: "Clothes",
    stock: "124 Low Stock",
    price: "$47",
    status: "Inactive",
  },
];

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

  // FETCH + FALLBACK
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, "products"),
          orderBy("createdAt", "desc"),
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (data.length === 0) {
          // USE STATIC DATA
          const fallback = productsData.map((item, index) => ({
            id: index,
            ...item,
            stock: item.stock === "Out of Stock" ? 0 : parseInt(item.stock),
            price: parseFloat(item.price.replace("$", "")),
            image: "/placeholder.png",
          }));

          setProducts(fallback);
          setFiltered(fallback);
        } else {
          setProducts(data);
          setFiltered(data);
        }
      } catch (err) {
        console.error(err);

        // IF ERROR → FALLBACK
        const fallback = productsData.map((item, index) => ({
          id: index,
          ...item,
          stock: item.stock === "Out of Stock" ? 0 : parseInt(item.stock),
          price: parseFloat(item.price.replace("$", "")),
          image: "/placeholder.png",
        }));

        setProducts(fallback);
        setFiltered(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // SEARCH + FILTER
  useEffect(() => {
    let data = [...products];

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (statusFilter) {
      data = data.filter((item) => item.status === statusFilter);
    }

    setFiltered(data);
    setCurrentPage(1);
  }, [search, statusFilter, products]);

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
          + Add Product
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div className="flex items-center border rounded-md px-3 py-2 w-full md:w-72">
          <FiSearch />
          <input
            type="text"
            placeholder="Search product..."
            className="ml-2 outline-none w-full text-sm"
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
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 text-left">Product</th>
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
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <img
                      src={item.image || "/placeholder.png"}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <span className="font-medium">{item.name}</span>
                  </td>

                  <td className="p-3 text-gray-600 text-center">{item.category}</td>

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

                  <td className="p-3 text-center">${item.price}</td>

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
