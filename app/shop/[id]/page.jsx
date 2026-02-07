"use client"
import React,{useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { shopItems } from '@/data'
import { useParams } from 'next/navigation'
import { MdApartment, MdBedroomChild, MdOutlineBathroom } from 'react-icons/md'
import { PiMapPinAreaDuotone } from 'react-icons/pi'
import { CiDeliveryTruck, CiLineHeight } from "react-icons/ci";
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'
import { FaRegHeart, FaHeart  } from 'react-icons/fa'
import { AiOutlineColumnWidth } from "react-icons/ai";
import Navbar from '@/component/01/navbar'
import Footer from '@/component/01/footer';

function page() {
 const [Open, setOpen] = useState(null);
 const [isFavorite, setIsFavorite] = useState(false);


 const {id} = useParams()
 const product = shopItems.find((item) => item.id === Number(id))
  const [activeImage, setActiveImage] = useState(product?.image);

//  this is for the toast message 
  const toggleFavorite = () => {
  setIsFavorite(!isFavorite);

  if (!isFavorite) {
    toast.success("Added to wishlist ❤️");
  } else {
    toast("Removed from wishlist");
  }
};


  return (
    <div className='w-full'>
        <Navbar />
        <div className='flex flex-wrap gap-4 max-w-7xl my-15 mx-auto p-6 rounded-md bg-white shadow-md'>
           {/* clickable thumbnails */}
            <div className='flex-3 flex flex-col gap-3'>
              {[product.image, product.image, product.image].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-24 mt-5 rounded-xl mx-auto cursor-pointer border-2 transition-all
                    ${activeImage === img ? "border-[#ffd061]" : "border-transparent"}
                    hover:opacity-80`}
                />
              ))}
            </div>

            {/* this is the center image */}
            <div className='flex-10 p-2'>
              {/* this is the center image */}
              <div className='flex-10 p-2'>
                <div className="relative overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt="image"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className='bg-black w-full h-96 rounded-xl'
                    />
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-3 p-2 gap-2 mt-5">
                <div className="mx-auto text-md p-1 w-40">
                  <MdApartment className='w-8 h-8 mx-auto cursor-pointer'/>
                  <p className="text-center my-1.5">{product?.floors} Floors</p>
                </div>
    
                <div className="mx-auto text-md p-1  w-40 border-r-2 border-l-2 border-gray-300">
                  <MdBedroomChild className='w-8 h-8 mx-auto cursor-pointer'/>
                  <p className="text-center my-1.5">{product?.bedroom} Bedrooms</p>
                </div>
    
                <div className="mx-auto text-md p-1  w-40">
                  <MdOutlineBathroom className='w-8 h-8 mx-auto cursor-pointer'/>
                  <p className="text-center my-1.5">{product?.bathroom} Bathrooms</p>
                </div>
    
                  <div className="mx-auto w-40 text-md p-1 ">
                  <CiLineHeight className='w-8 h-8 mx-auto cursor-pointer' />
                  <p className="text-center my-1.5">{product?.height} m</p>
                </div>
    
                <div className="mx-auto text-md p-1  w-40 border-r-2 border-l-2 border-gray-300">
                  <AiOutlineColumnWidth className='w-8 h-8 mx-auto cursor-pointer'/>
                  <p className="text-center my-1.5">{product?.width} m</p>
                </div>
    
                <div className="mx-auto text-md p-1  w-40">
                  <PiMapPinAreaDuotone className='w-8 h-8 mx-auto font-bold cursor-pointer'/>
                  <p className="text-center my-1.5">{product?.area} Area</p>
                </div>
              </div>
            </div>

            <div className='flex-7 mx-5'>
               <h1 className='my-5 text-2xl font-bold'>
                {product?.title} {product?.id}
               </h1>

               {/* this is with radio */}
               <div className="p-2 border rounded-xl border-gray-300">
                <h1>File Type</h1>
                <span className='gap-2 flex'>
                    <input type="radio" name="Rooms" id="" className='cursor-pointer'/>
                    <p className="text-gray-700 leading-relaxed text-sm">CAD + PDF</p>
                </span>
                <span className='gap-2 flex'>
                    <input type="radio" name="Rooms" id="" className='cursor-pointer'/>
                    <p className="text-gray-700 leading-relaxed text-sm">PDF</p>
                </span>
               </div>

                {/* this is with checkbox */}
               <div className="p-2 my-3 border rounded-xl border-gray-300">
                <h1>Drawing Sets</h1>
                <span className='gap-2 flex'>
                    <input type="checkbox" name="Rooms" id="" className='cursor-pointer'/>
                    <p className="text-gray-700 leading-relaxed text-sm">Architectural Drawings</p>
                </span>
               </div>

               {/* delivery information */}
               <div className="p-2 my-3">
                <span className='gap-2 flex'>
                    {/* icons */}
                    <CiDeliveryTruck className='w-7 h-7 font-bold'/>
                    <p className="text-gray-700 leading-relaxed text-sm">Instant digital delivery</p>
                </span>
                <span className='gap-2 flex my-2.5'>
                    {/* icons */}
                    <GiTakeMyMoney className='w-7 h-7 font-bold'/>
                    <p className="text-gray-700 leading-relaxed text-sm">100% Money Guarantee</p>
                </span>
                <span className='gap-2 flex'>
                    {/* icons */}
                    <GiMoneyStack className='w-7 h-7 font-bold' />
                    <p className="text-gray-700 leading-relaxed text-sm">Multiple payment options</p>
                </span>

                {/* button for purchase */}
                <button
                className='my-3 p-2 w-full rounded-xl shadow-md cursor-pointer text-gray-100 bg-[#ffd061] hover:bg-[#f5c84a]'>
                  <h1 
                  onClick={() => toast.success("Proceeding to checkout")}
                  className='font-bold'>
                    Buy Now {product?.price}
                  </h1>
                </button>

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
                      Add to Wishlist
                    </p>
                  </span>

                  {/* THIS IS FOR DROPDOWN */}
                    <span 
                    className="overflow-hidden">
                    <h2 className="font-bold my-2">Description</h2>
                    <span className='gap-2 flex'>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Obcaecati ad veritatis ea iste eligendi animi quis facere ducimus asperiores, 
                          facilis ex repellat doloribus rerum harum?
                        </p>
                    </span>
                   </span>
                </div>
               </div>
            </div>
        </div>

        {/* this is for the footer */}
        <Footer />
    </div>
  )
}

export default page