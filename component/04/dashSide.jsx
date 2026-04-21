"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { PiNotepadFill } from "react-icons/pi";

function dashSide({ setPageLoading }) {
  const [openIndex, setOpenIndex] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const setData = [
    {
      title: "Dashboard",
      icon: <MdSpaceDashboard />,
      options: [
        { name: "summary", path: "/dash_board", icon: <PiNotepadFill /> },
        { name: "notifications", path: "/dash_board/notifications", icon: <IoNotifications />  },
      ],
    },
    {
      title: "Products",
      icon: <FaBoxOpen />,
      options: [
        { name: "all products", path: "/dash_board/products", icon: <FaBoxOpen /> },
        { name: "add product", path: "/dash_board/product-add", icon: <AiOutlinePlus />  },
      ],
    },
    {
      title: "Checkouts",
      icon: <BsCartCheck />,
      options: [{ name: "checkouts", path: "/dash_board/checkouts" }],
    },
    {
      title: "Users",
      icon: <FaUsers />,
      options: [
        { name: "all users", path: "/dash_board/users" },
        { name: "add user", path: "/dash_board/user-add", icon: <AiOutlinePlus /> },
      ],
    },
    {
      title: "Customers",
      icon: <HiUsers />,
      options: [{ name: "all customers info", path: "/dash_board/customers" }],
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp />,
      options: [{ name: "setup", path: "#" }],
    },
  ];

  const toggleData = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const isActivePath = (path) => {
    return pathname === path;
  };

  return (
    <section className="w-1/4 h-screen bg-white p-4">
      {/* Logo Section */}
      <Link
        href="/"
        className="flex items-center justify-center lg:justify-start gap-2 mb-6"
      >
        <span className="hidden md:block text-xl font-bold">Logo</span>
      </Link>

      {/* Menu Section */}
      <div className="mt-6">
        {setData.map((item, index) => (
          <div key={index}>
            <div className="shadow-xs w-70 bg-gray-100 rounded-xl my-3.5 cursor-pointer overflow-hidden">
              <div className="p-5" onClick={() => toggleData(index)}>
                <span className="flex justify-between items-center">
                  <span className="flex gap-2 items-center">
                    <span className="text-lg text-gray-700 ">{item.icon}</span>
                    <h1 className="font-bold">{item.title}</h1>
                  </span>
                  {item.options && (
                    <motion.span
                      className="rounded-full bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer p-2"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoIosArrowDown className="font-bold text-xs" />
                    </motion.span>
                  )}
                </span>
              </div>

              {/* this is the drop down action */}
              {item.options && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-5 pb-5 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex flex-col gap-2 pt-3">
                      {item.options.map((option, i) => (
                        <div
                          key={i}
                          className={`flex gap-1.5 items-center cursor-pointer px-3 py-2 rounded-lg transition-colors ${
                            isActivePath(option.path)
                              ? "bg-[#ffd061] text-black"
                              : "text-gray-700 hover:text-[#f5c84a] hover:bg-gray-200"
                          }`}
                          onClick={() => handleNavigation(option.path)}
                        >
                          <span className="">{option.icon}</span>
                          <p className="">{option.name}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default dashSide;
