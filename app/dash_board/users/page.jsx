"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { FaEdit, FaEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

const getStatusStyle = (status) => {
  switch (status) {
    case "Published":
      return "bg-green-100 text-green-700";
    case "Inactive":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-200 text-gray-600";
  }
};

export default function PageProject() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  // REALTIME FETCH USERS
  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(users);
        setFiltered(users);
        setLoading(false);
      },
      (error) => {
        console.error("Realtime error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // cleanup
  }, []);

  // SEARCH (CLIENT SIDE)
  const searchUsers = useCallback((query) => {
    if (!query) {
      setFiltered(products);
      return;
    }

    const lower = query.toLowerCase();

    const result = products.filter(
      (user) =>
        user.name?.toLowerCase().includes(lower) ||
        user.email?.toLowerCase().includes(lower) ||
        user.id?.toLowerCase().includes(lower)
    );

    setFiltered(result);
    setCurrentPage(1);
  }, [products]);

  useEffect(() => {
    const delay = setTimeout(() => {
      searchUsers(search);
    }, 300);

    return () => clearTimeout(delay);
  }, [search, searchUsers]);

  // FILTER STATUS
  useEffect(() => {
    let data = [...products];

    if (statusFilter) {
      data = data.filter((item) => {
        const status = item.isApproved ? "Published" : "Inactive";
        return status === statusFilter;
      });
    }

    setFiltered(data);
    setCurrentPage(1);
  }, [statusFilter, products]);

  // ACTIVATE USER
  const handleActivate = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), {
        isApproved: true,
        status: "Published",
      });
    } catch (err) {
      console.error("Activate error:", err);
    }
  };

  // DEACTIVATE USER
  const handleDeactivate = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), {
        isApproved: false,
        status: "Inactive",
      });
    } catch (err) {
      console.error("Deactivate error:", err);
    }
  };

  // DELETE USER (Firestore only)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete user");
    }
  };

  // PAGINATION
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filtered.slice(start, start + ITEMS_PER_PAGE);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#ffd061]/30 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-sm tracking-wide font-bold">Loading...</p>
      </div>
    );

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 m-5">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h2 className="text-lg font-semibold">Users List</h2>

        <button className="px-4 py-2 cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] rounded-md font-semibold">
          <Link href="/dash_board/project-add">+ Add User</Link>
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <div className="flex items-center border rounded-md px-3 py-2 w-full md:w-72">
          <FiSearch />
          <input
            type="text"
            placeholder="Search user..."
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
        </select>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto h-125">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-red-600">
                  No users found
                </td>
              </tr>
            ) : (
              currentData.map((item) => {
                const status = item.isApproved
                  ? "Published"
                  : "Inactive";

                return (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3 flex items-center gap-3">
                      <img
                        src={item.photoURL || "/placeholder.png"}
                        className="w-15 h-15 rounded-md object-cover"
                      />
                      <span className="font-medium">
                        {item.name || "No Name"}
                      </span>
                    </td>

                    <td className="p-3 text-gray-600">{item.id}</td>

                    <td className="p-3 text-gray-600">
                      {item.email || "No Email"}
                    </td>

                    <td className="p-3 text-gray-600">
                      {item.role || "User"}
                    </td>

                    <td className="p-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          status
                        )}`}
                      >
                        {status}
                      </span>
                    </td>

                    <td className="p-3 text-right">
                      <div className="relative group">
                        <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                          <FiMoreHorizontal className="w-5 h-5" />

                          <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                            <div className="py-1">
                              <button
                                onClick={() =>
                                  handleActivate(item.id)
                                }
                                className="cursor-pointer w-full text-left hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500"
                              >
                                <FaEye className="w-5 h-5" />
                                Activate
                              </button>

                              <button
                                onClick={() =>
                                  handleDeactivate(item.id)
                                }
                                className="cursor-pointer w-full text-left hover:text-[#ffd061] font-bold flex items-center gap-2 px-3 py-2 text-xs text-gray-500"
                              >
                                <FaEdit className="w-5 h-5" />
                                Deactivate
                              </button>

                              <hr className="my-1 border-gray-200" />

                              <button
                                onClick={() =>
                                  handleDelete(item.id)
                                }
                                className="cursor-pointer w-full text-left font-bold flex items-center gap-2 px-3 py-2 text-xs hover:text-red-600"
                              >
                                <ImBin className="w-5 h-5" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
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
                currentPage === i + 1
                  ? "bg-[#ffd061] font-semibold"
                  : "border"
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