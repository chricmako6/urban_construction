'use client'
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
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
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <input placeholder="Full Name" className="border p-2 w-full mb-3 rounded" />
      <input placeholder="Email" className="border p-2 w-full mb-3 rounded" />
    </div>
  )}

  {selectedInfo === 'payment' && (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <input placeholder="Card Number" className="border p-2 w-full mb-3 rounded" />
      <input placeholder="Expiry Date" className="border p-2 w-full mb-3 rounded" />
    </div>
  )}

  {selectedInfo === 'complete' && (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Order Completed Successfully!
      </h2>
      <p>Thank you for your purchase.</p>
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