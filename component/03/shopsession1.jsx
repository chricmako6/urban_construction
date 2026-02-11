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
    options: ['Apartments', 'Commercial', 'Hotels & Lodges', 'Residential']
  },
  {
    title: 'Number of Bedrooms',
    options: ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4+ Bedrooms']
  },
  {
    title: 'Number of Bathrooms',
    options: ['1 Bathroom', '2 Bathrooms', '3 Bathrooms', '4+ Bathrooms']
  },
  {
    title: 'Number of Floors',
    options: ['1 Floor', '2 Floors', '3 Floors', '4+ Floors']
  },
  {
    title: 'Area',
    options: ['0-100 sqm', '100-200 sqm', '200-300 sqm', '300+ sqm']
  },
];


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
                    <div className="flex flex-col gap-2">
                      {product.options.map((option, i) => (
                        <label key={i} className='flex gap-2 items-center cursor-pointer'>
                          <input
                            type="checkbox"
                            className='cursor-pointer'
                          />
                          <p className="text-gray-700 text-sm">{option}</p>
                        </label>
                      ))}
                    </div>

                    </motion.div>
                   </motion.span>

                </div>
            </div>
            ))}
        
            <span className='flex w-80 justify-between items-center shadow-xs bg-white p-5 rounded-xl my-4'>
            <h1 className='font-bold'>Duplex?</h1>

            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              
              <div className="w-11 h-6 bg-gray-200 rounded-full peer 
                peer-checked:bg-[#ffd061] 
                peer-focus:ring-2 peer-focus:ring-[#f5c84a]
                after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                after:bg-white after:border after:rounded-full
                after:h-5 after:w-5 after:transition-all
                peer-checked:after:translate-x-full">
              </div>
            </label>
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