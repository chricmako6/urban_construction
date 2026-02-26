'use client'
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import Footer from '@/component/01/footer'
import Navbar from '@/component/01/navbar'

function PageCheck() {
  const [selectedInfo, setSelectedInfo] = useState('person');
  const steps = ['person', 'payment', 'complete'];

  const currentStepIndex = steps.indexOf(selectedInfo);

  const goNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setSelectedInfo(steps[currentStepIndex + 1]);
    }
  };

  const goBack = () => {
    if (currentStepIndex > 0) {
      setSelectedInfo(steps[currentStepIndex - 1]);
    }
  };

  const informations = {
    person : {

    },
    payment : {

    },
    complete : {

    }
  }

  // Handle information click
  const handleInfoClick = (information) => {
    setSelectedInfo(information);
  };

  // Get currently selected information
  const currentInfo = informations[selectedInfo];

  return (
    <div className='max-w-full'>
      <Navbar />
      <div className="p-4">
        <div className="bg-white my-20 rounded-lg  shadow-md p-4 md:max-w-5xl mx-auto">
          <div className='bg-gray-100 max-w-4xl mx-auto p-2 rounded-full flex justify-between'>
            {/* PERSONAL */}
            <button
              onClick={() => setSelectedInfo('person')}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer 
                ${selectedInfo === 'person'
                  ? 'bg-[#ffd061] scale-110 shadow-md'
                  : 'border border-[#ffd061] hover:bg-[#f5c84a]'
                }`}
            >
              <CgProfile className='w-6 h-6'/>
            </button>

            {/* PAYMENT */}
            <button
              onClick={() => setSelectedInfo('payment')}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer 
                ${selectedInfo === 'payment'
                  ? 'bg-[#ffd061] scale-110 shadow-md'
                  : 'border border-[#ffd061] hover:bg-[#f5c84a]'
                }`}
            >
              <RiSecurePaymentLine className='w-6 h-6'/>
            </button>

            {/* COMPLETE */}
            <button
              onClick={() => setSelectedInfo('complete')}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer
                ${selectedInfo === 'complete'
                  ? 'bg-[#ffd061] scale-110 shadow-md'
                  : 'border border-[#ffd061] hover:bg-[#f5c84a]'
                }`}
            >
              <FaCheck className='w-6 h-6'/>
            </button>
          </div>


          {/* THIS WHICH HAVE CARRY THE LAYOUT */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">

            {selectedInfo === 'person' && (
              <div>
              
              </div>
            )}

            {selectedInfo === 'payment' && (
              <div className="flex  gap-4">
                {/* THIS IS FOR PAYMENT OPTIONS */}
                <div className="bg-white border border-gray-200 flex-10 p-4 rounded shadow-xs">
                  <h1 className="font-semibold">
                    Select Payment Option
                  </h1>
                  <p className="text-sm text-gray-400 mt-2">
                    All transactions are secure and encrypted.
                  </p>

                  {/* OPTIONS */}
                  <div className="mt-4">
                    <span className='gap-2 flex border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
                      <input type="radio" name="Rooms" id="" className='cursor-pointer'/>
                      <p className="text-gray-700 leading-relaxed text-sm">PayPal</p>
                    </span>

                    <div className="gap-2 my-4 border border-gray-300 rounded-md p-3 cursor-pointer">
                      <span className='flex gap-2'>
                        <input type="radio" name="Rooms" id="" className='cursor-pointer'/>
                        <p className="text-gray-700 leading-relaxed text-sm">Credit card</p>
                      </span>
                      <span className=''>
                        <p className="text-gray-400 mb-3 py-1 leading-relaxed text-xs">Pay securely using your Visa, Mastercard or American Express card.</p>
                      </span>

                      <span className='relative'>
                        <p className="text-gray-700 leading-relaxed text-xs">Card Number</p>
                        <input type="text" 
                        placeholder='1234 1234 1234 1234' 
                        className="w-full text-sm border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#ffd061]"/>
                        <FaCreditCard className="absolute w-6 h-6 right-3 top-13 -translate-y-2/2 text-gray-400 text-sm pointer-events-none" />
                      </span>

                      <div className="flex gap-4 mt-4">
                        <span className=''>
                        <p className="text-gray-700 leading-relaxed text-xs">Name on Card</p>
                        <input type="text" 
                        placeholder='Card holder name' 
                        className="w-fit text-sm border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#ffd061]"/>
                        </span>

                        <span className=''>
                        <p className="text-gray-700 leading-relaxed text-xs">Expire </p>
                        <input type="text" 
                        placeholder='MM/YY' 
                        className="w-full text-sm border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ffd061]"/>
                      </span>

                      <span className=''>
                        <p className="text-gray-700 leading-relaxed text-xs">CVV</p>
                        <input type="text" 
                        placeholder='CVV' 
                        className="w-full text-sm border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#ffd061]"/>
                      </span>
                      </div>
                    </div>
                    

                    <span className='gap-2 my-4 flex border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
                      <input type="radio" name="Rooms" id="" className='cursor-pointer'/>
                      <p className="text-gray-700 leading-relaxed text-sm">Google pay</p>
                    </span>

                    <span className='gap-2 my-4 flex border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
                      <input type="radio" name="Rooms" id="" className='cursor-pointer'/>
                      <p className="text-gray-700 leading-relaxed text-sm">Cash on delivery</p>
                    </span>

                    <button className="my-3 p-2 w-full rounded-xl shadow-md cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a]">
                      Pay | $100
                    </button>
                  </div>
                </div>

                {/* THIS IS FOR PAYMENT SUMMARY */}
                <div className="bg-white flex-7 p-4 rounded shadow-xs">2</div>
              </div>
            )}

            {selectedInfo === 'complete' && (
              <div className="text-center">
              
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {currentStepIndex > 0 && (
                <button
                  onClick={goBack}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Back
                </button>
              )}

              {currentStepIndex < steps.length - 1 && (
                <button
                  onClick={goNext}
                  className="bg-[#ffd061] px-4 py-2 rounded hover:bg-[#f5c84a]"
                >
                  Next
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageCheck