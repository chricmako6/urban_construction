"use client";
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";
import { MdApartment, MdBedroomChild, MdOutlineBathroom } from "react-icons/md";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { CiDeliveryTruck, CiLineHeight } from "react-icons/ci";
import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";
import Navbar from "@/component/01/navbar";
import Footer from "@/component/01/footer";
import { TiShoppingCart } from "react-icons/ti";
import { BiArrowToTop } from "react-icons/bi";
import { StoreContext } from "@/app/hooks/context/StoreContext";
import { FiArrowUpRight } from "react-icons/fi";
// import { shopItems } from '@/app/utilities/data';

function page({ item }) {
  const { id } = useParams();
  const { addProduct, products } = useContext(StoreContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  //  const product = shopItems.find((item) => item.id === Number(id))
  // const [activeImage, setActiveImage] = useState(product?.image);

  //  this is for the toast message
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      toast.success("Favorite ❤️");
    } else {
      toast("Removed from Favorite");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://jenganasisi-backend.vercel.app/api/products/${id}`,
        );
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#ffd061]/30 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>

        <p className="mt-6 md:text-lg text-base font-semibold text-gray-800">
          Loading...
        </p>
      </div>
    );
  }
  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-full">
      <Navbar />
      <div className="p-3 md:p-6 py-16 md:py-32">
        <div className="overflow-hidden flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto md:p-6 p-4 rounded-md bg-white shadow-md">
          {/* clickable thumbnails */}
          <div className="flex flex-row lg:flex-col gap-3 ">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product?.name}
                onClick={() => setActiveImage(img)}
                className={`w-24 h-24 mt-5 rounded-xl mx-auto cursor-pointer border-2 transition-all
                      ${activeImage === img ? "border-[#ffd061]" : "border-transparent"}
                      hover:opacity-80 bg-cover shadow-xl`}
              />
            ))}
          </div>

          {/* this is the center image */}
          <div className="flex-10 p-2">
            {/* this is the center image */}
            <div className="flex-10 p-2">
              <div className="relative rounded-xl">
                {/* BUTTONS */}
                <div className="absolute flex top-44 justify-between w-full p-5">
                  {/* PREV BUTTON */}
                  <button className="bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer rounded-full p-2">
                    <BiArrowToTop className="w-5 h-5 -rotate-90" />
                  </button>

                  {/* NEXT BUTTON */}
                  <div>
                    <button className="bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer rounded-full p-2">
                      <BiArrowToTop className="w-5 h-5 rotate-90" />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={product?.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full lg:h-96 h-90 rounded-xl shadow-xl object-cover bg-center"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 p-2 gap-4 py-3 md:py-5">
              <div className="mx-auto text-md p-1 w-full lg:w-40">
                <MdApartment className="w-8 h-8 mx-auto cursor-pointer" />
                <p className="text-center my-1.5">{product?.floors} Floors</p>
              </div>

              <div className="mx-auto text-md p-1  w-40 lg:border-r-2 border-l-2 border-gray-300">
                <MdBedroomChild className="w-8 h-8 mx-auto cursor-pointer" />
                <p className="text-center my-1.5">
                  {product?.bedroom} Bedrooms
                </p>
              </div>

              <div className="mx-auto text-md p-1  w-40">
                <MdOutlineBathroom className="w-8 h-8 mx-auto cursor-pointer" />
                <p className="text-center my-1.5">
                  {product?.bathroom} Bathrooms
                </p>
              </div>

              <div className="mx-auto w-40 text-md p-1 ">
                <CiLineHeight className="w-8 h-8 mx-auto cursor-pointer" />
                <p className="text-center my-1.5">{product?.height} m</p>
              </div>

              <div className="mx-auto text-md p-1  w-40 border-r-2 lg:border-l-2 border-gray-300">
                <AiOutlineColumnWidth className="w-8 h-8 mx-auto cursor-pointer" />
                <p className="text-center my-1.5">{product?.width} m</p>
              </div>

              <div className="mx-auto text-md p-1  w-40">
                <PiMapPinAreaDuotone className="w-8 h-8 mx-auto font-bold cursor-pointer" />
                <p className="text-center my-1.5">{product?.area} Area</p>
              </div>
            </div>
          </div>

          <div className="flex-7 mx-5">
            <h1 className="my-5 text-2xl font-bold">
              {product?.name} {product?.id}
            </h1>

            {/* this is with radio */}
            <div className="p-2 border rounded-xl border-gray-300">
              <h1>File Type</h1>
              <span className="gap-2 flex">
                <input
                  type="radio"
                  name="Rooms"
                  id=""
                  className="cursor-pointer"
                />
                <p className="text-gray-700 leading-relaxed text-sm">
                  CAD + PDF
                </p>
              </span>
              <span className="gap-2 flex">
                <input
                  type="radio"
                  name="Rooms"
                  id=""
                  className="cursor-pointer"
                />
                <p className="text-gray-700 leading-relaxed text-sm">PDF</p>
              </span>
            </div>

            {/* this is with checkbox */}
            <div className="p-2 md:my-6 my-3 border rounded-xl border-gray-300">
              <h1>Drawing Sets</h1>
              <span className="gap-2 flex">
                <input
                  type="checkbox"
                  name="Rooms"
                  id=""
                  className="cursor-pointer"
                />
                <p className="text-gray-700 leading-relaxed text-sm">
                  Architectural Drawings
                </p>
              </span>
            </div>

            {/* THIS IS FOR DROPDOWN */}
            <span className="overflow-hidden">
              <h2 className="font-bold my-2">Description</h2>
              <span className="gap-2 flex">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product?.description}
                </p>
              </span>
            </span>

            {/* delivery information */}
            <div className="p-2 my-3">
              <span className="gap-2 flex">
                {/* icons */}
                <CiDeliveryTruck className="w-7 h-7 font-bold" />
                <p className="text-gray-700 leading-relaxed text-sm">
                  Instant digital delivery
                </p>
              </span>
              <span className="gap-2 flex my-2.5">
                {/* icons */}
                <GiTakeMyMoney className="w-7 h-7 font-bold" />
                <p className="text-gray-700 leading-relaxed text-sm">
                  100% Money Guarantee
                </p>
              </span>
              <span className="gap-2 flex">
                {/* icons */}
                <GiMoneyStack className="w-7 h-7 font-bold" />
                <p className="text-gray-700 leading-relaxed text-sm">
                  Multiple payment options
                </p>
              </span>

              <div className="flex gap-4 my-3">
                {/* BUY NOW */}
                <div className="w-full">
                  <Link href="/checkout">
                    {/* Animated button */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="group flex justify-center md:justify-start py-3 md:py-5"
                    >
                      <button
                        onClick={() => toast.success("Proceeding to checkout")}
                        className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] cursor-pointer text-black flex items-center gap-3 px-2 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm"
                      >
                        Tshs:{product?.price}
                        <motion.span className="bg-[#383635] inline-block p-1 rounded-sm ml-2 group-hover/btn:rotate-45 transition-transform duration-300">
                          <FiArrowUpRight className="text-white w-5 h-5" />
                        </motion.span>
                      </button>
                    </motion.div>
                  </Link>
                </div>

                {/* ADD TO CART */}
                <div className="w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="group flex justify-center md:justify-start py-3 md:py-5"
                  >
                    <button
                      onClick={() => toast.success("Proceeding to checkout")}
                      className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] cursor-pointer text-black flex items-center gap-3 px-4 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm"
                    >
                      Add Cart
                      <motion.span className="bg-[#383635] inline-block p-1 rounded-sm ml-2 group-hover/btn:rotate-45 transition-transform duration-300">
                        <TiShoppingCart className="text-white w-5 h-5" />
                      </motion.span>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* add to favorite and descriptions */}
              <div className="">
                <span className="gap-2 flex my-5 cursor-pointer select-none">
                  {isFavorite ? (
                    <FaHeart
                      onClick={toggleFavorite}
                      className="w-6 h-6 text-red-600 transition-colors duration-300"
                    />
                  ) : (
                    <FaRegHeart
                      onClick={toggleFavorite}
                      className="w-6 h-6 text-gray-700 transition-colors duration-300"
                    />
                  )}
                  <p className="text-gray-700 leading-relaxed text-md">
                    Favorite
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this is for the footer */}
      <Footer />
    </div>
  );
}

export default page;
