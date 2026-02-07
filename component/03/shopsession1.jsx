import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io'
import { IoFilter } from 'react-icons/io5'


function Shopsession1() {
const [openIndex, setOpenIndex] = useState(null);
const [Open, setOpen] = useState(null);

 // data for Product type
  const productData = [
    {
      title: 'Product type',
    },
    {
      title: 'Number of Bedrooms',
    },
    {
      title: 'Number of Bathrooms',
    },
    {
      title: 'Number of Floors',
    },
    {
      title: 'Area',
    },
  ]

    const priceData = [
    {
      title: 'Price',
    },
  ]

  const toggleData = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }; 

  const openData = (index) => {
    setOpen(Open === index ? null : index);
  }; 

  return (
    <div className=''>
        <div className='flex gap-2 '>
            <IoFilter />
         <span className='font-bold'>
            Filters
         </span>
        </div>

        <div className='mt-6'>
            {/* data for Product type */}
           {productData.map((product, index) => (
            <div key={index}>
                <div 
                className="shadow-xs w-80 bg-white p-5 rounded-xl my-5 cursor-pointer">
                    {/* this is the title */}
                    <span className="flex justify-between ">
                    <h1 className='font-bold'>{product.title}</h1>
                    <motion.span className='rounded-full bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer p-2'
                    onClick={() => toggleData(index)}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}>
                    {openIndex === index ? 
                        ( <IoIosArrowDown className='font-bold text-xs'/> ) : 
                        ( <IoIosArrowDown className='font-bold text-xs'/>)
                    }
                    </motion.span>
                    </span>

                    {/* THIS IS FOR DROPDOWN */}
                    <motion.span 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                    display: openIndex === index ? 0 : 'block',
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <motion.div className='p-3  border-gray-200'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    >
                    <span className='gap-2 flex'>
                        <input type="checkbox" name="Rooms" id="" className='cursor-pointer'/>
                        <p className="text-gray-700 leading-relaxed text-sm">Apartments</p>
                    </span>
                    <span className='gap-2 flex'>
                        <input type="checkbox" name="Rooms" id="" className='cursor-pointer'/>
                        <p className="text-gray-700 leading-relaxed text-sm">Commercial</p>
                    </span>
                    <span className='gap-2 flex'>
                        <input type="checkbox" name="Rooms" id="" className='cursor-pointer'/>
                        <p className="text-gray-700 leading-relaxed text-sm">Hotels & Lodges</p>
                    </span>
                    <span className='gap-2 flex'>
                        <input type="checkbox" name="Rooms" id="" className='cursor-pointer'/>
                        <p className="text-gray-700 leading-relaxed text-sm">Residential</p>
                    </span>
                    </motion.div>
                   </motion.span>
                </div>
            </div>
            ))}
        
            <span className='flex w-80 justify-between shadow-xs bg-white p-5 rounded-xl my-4'>
                <h1 className='font-bold'>Duplex?</h1>
                 <span className=''>
                   <input type="reset" value="" />
                </span>
            </span>


            {priceData.map((price, index) => (
            <div key={index}>
                <div 
                className="shadow-xs w-80 bg-white p-5 rounded-xl my-5 cursor-pointer">
                    {/* this is the title */}
                    <span className="flex justify-between ">
                    <h1 className='font-bold'>{price.title}</h1>
                    <motion.span className='rounded-full bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer p-2'
                    onClick={() => openData(index)}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}>
                    {Open === index ? 
                        ( <IoIosArrowDown className='font-bold text-xs'/> ) : 
                        ( <IoIosArrowDown className='font-bold text-xs'/>)
                    }
                    </motion.span>
                    </span>

                    {/* THIS IS FOR DROPDOWN */}
                    <motion.span 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                    display: Open === index ? 0 : 'block',
                    height: Open === index ? 'auto' : 0,
                    opacity: Open === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <motion.div className='py-3 flex items-center gap-3 border-gray-200'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: Open === index ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    >
                    <span className='flex gap-2 p-2 rounded-xl bg-gray-200 '>
                      <p className="py-1.5">Tshs</p>
                      <input type="text" name="" id="" placeholder='0' className='w-16 text-end p-1.5'/>
                    </span>
                     to
                    <span className='flex gap-2 p-2 rounded-xl bg-gray-200'>
                      <p className="py-1.5">Tshs</p>
                      <input type="text" name="" id="" placeholder='180k' className='w-16 text-end p-1.5'/> 
                    </span>
                    
                    </motion.div>
                </motion.span>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default Shopsession1