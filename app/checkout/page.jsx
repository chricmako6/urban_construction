'use client'
import React, { useState, useContext} from 'react'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import Footer from '@/component/01/footer'
import Navbar from '@/component/01/navbar'
import { StoreContext } from '../hooks/context/StoreContext';
import { useRouter } from 'next/navigation';

function PageCheck() {
  const { products, clearCart } = useContext(StoreContext);
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState('person');
  const steps = ['person', 'payment', 'complete'];
  const currentStepIndex = steps.indexOf(selectedInfo);

  const [formData, setFormData] = useState({
  email: "",
  phone: "",
  location: "",
  });
  

  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});

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

  const generateOrderId = () => {
    const random = Math.floor(100000 + Math.random() * 900000);
    return `ORD-${random}`;
  };

  const getNumericPrice = (price) => {
    if (typeof price === "string") {
      const numericValue = parseFloat(price.replace(/[^\d.]/g, ""));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return typeof price === "number" ? price : 0;
  };

  // Subtotal
  const subtotal = products.reduce((acc, item) => {
    const numericPrice = getNumericPrice(item.price);
    const itemTotal = numericPrice * (item.quantity || 1);
    return acc + itemTotal;
  }, 0);

  const deliveryCost = 20;
  const tax = 5;
  const discount = subtotal * 0.1;
  const finalTotal = subtotal + deliveryCost + tax - discount;

  // Handle information click
  const handleInfoClick = (information) => {
    setSelectedInfo(information);
  };


  return (
    <div className='max-w-full'>
      <Navbar />
      <div className="p-4">
        <div className="bg-white my-20 rounded-lg  shadow-md p-4 md:max-w-5xl mx-auto">
          <div className='bg-gray-100 border border-gray-200 max-w-4xl mx-auto p-2 rounded-full flex justify-between'>
            {/* PERSONAL */}
            <button
             disabled={currentStepIndex < 0}
              onClick={() => setSelectedInfo('person')}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer 
                ${selectedInfo === 'person'
                  ? 'bg-[#ffd061] scale-110 shadow-md'
                  : 'border border-[#ffd061] hover:bg-[#f5c84a]'
                }

                ${currentStepIndex > 0
                  ? 'bg-green-500 text-white'
                  : selectedInfo === 'person'
                  ? 'bg-[#ffd061]'
                  : 'bg-gray-200'
                }`}
             >
              {currentStepIndex > 0 ? <FaCheck className='w-6 h-6'/> : <CgProfile className='w-6 h-6'/>}
              
            </button>

            {/* PAYMENT */}
            <button
             disabled={currentStepIndex < 0}
              onClick={() => {
                let newErrors = {};

                if (!formData.email) newErrors.email = true;
                if (!formData.phone) newErrors.phone = true;
                if (!formData.location) newErrors.location = true;

                setErrors(newErrors);

                if (Object.keys(newErrors).length === 0) {
                  setSelectedInfo("payment");
                }
              }}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer 
                ${selectedInfo === 'payment'
                  ? 'bg-[#ffd061] scale-110 shadow-md'
                  : 'border border-[#ffd061] hover:bg-[#f5c84a]'
                }

                ${currentStepIndex > 1
                  ? 'bg-green-500 text-white'
                  : selectedInfo === 'payment'
                  ? 'bg-[#ffd061]'
                  : 'bg-gray-200'
                }`}
            >
              {currentStepIndex > 1 ? <FaCheck className='w-6 h-6'/> : <RiSecurePaymentLine className='w-6 h-6'/>}
            </button>

            {/* COMPLETE */}
            <button
             onClick={() => {
                if (!paymentMethod) {
                  setErrors({ payment: true });
                  return (
                    () => setSelectedInfo('complete')
                  );
                }}}
              className={`rounded-full p-3 transition-all duration-300 cursor-pointer
                ${selectedInfo === 'complete'
                  ? 'bg-[#ffd061] scale-110 shadow-md'
                  : 'border border-[#ffd061] hover:bg-[#f5c84a]'
                }

                ${currentStepIndex > 1
                  ? 'bg-green-500 text-white'
                  : selectedInfo === 'payment'
                  ? 'bg-[#ffd061]'
                  : 'bg-gray-200'
                }`}
            >
              <FaCheck className='w-6 h-6'/>
            </button>
          </div>


          {/* THIS WHICH HAVE CARRY THE LAYOUT */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md">
            {/* THIS IS FOR PERSON */}
            {selectedInfo === 'person' && (
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* PERSONAL INFORMATION FORM */}
                <div className="bg-white border border-gray-200 w-full md:flex-2 p-4 rounded shadow-xs">
                  <h1 className="font-semibold">
                    Personal Information
                  </h1>
                  <p className="text-sm text-gray-400 mt-2">
                    Please provide your details for delivery and contact.
                  </p>

                  <div className="mt-4 space-y-4">

                    {/* FULL NAME */}
                    <div>
                      <p className="text-gray-700 leading-relaxed text-xs mb-1">
                        Full Name
                      </p>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full text-sm border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ffd061]"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <p className="text-gray-700 leading-relaxed text-xs mb-1">
                        Email Address
                      </p>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full text-sm border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ffd061]
                        ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <p className="text-gray-700 leading-relaxed text-xs mb-1">
                        Phone Number
                      </p>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full text-sm border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ffd061]
                        ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                      />
                    </div>

                    {/* LOCATION */}
                    <div>
                      <p className="text-gray-700 leading-relaxed text-xs mb-1">
                        Location
                      </p>
                      <input
                        type="text"
                        placeholder="City / Region"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className={`w-full text-sm border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ffd061]
                        ${errors.location ? "border-red-500" : "border-gray-300"}`}
                      />
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                      <p className="text-gray-700 leading-relaxed text-xs mb-1">
                        Additional Notes
                      </p>
                      <textarea
                        rows="4"
                        placeholder="Write any delivery instructions..."
                        className="w-full text-sm border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#ffd061]"
                      />
                    </div>

                    <button 
                    onClick={() => {
                      let newErrors = {};

                      if (!formData.email) newErrors.email = true;
                      if (!formData.phone) newErrors.phone = true;
                      if (!formData.location) newErrors.location = true;

                      setErrors(newErrors);

                      if (Object.keys(newErrors).length === 0) {
                        setSelectedInfo("payment");
                      }
                    }}
                    className="my-3 p-2 w-full rounded-xl shadow-md cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a]">
                      Save & Continue
                    </button>

                  </div>
                </div>

                {/* ORDER SUMMARY  */}
                <div className="bg-white border border-gray-200 w-full md:flex-1 p-4 h-fit rounded shadow-xs">
                  <h1 className="font-bold border-b border-gray-200 p-3">
                    Your Cart (<span>{products.length}</span>)
                  </h1>

                  <div className="my-4 bg-white border border-gray-200 p-3 rounded-md">
                    <h1 className="leading-relaxed font-bold text-[15px]">
                      Order summary
                    </h1>

                    <div className="flex justify-between items-center py-1.5">
                      <p className="text-sm text-gray-400">Subtotal</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Delivery cost</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {deliveryCost}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Tax</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {tax}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Discount</p>
                      <span className="text-sm text-gray-600">10%</span>
                    </div>

                    <div className="flex border-t border-gray-200 justify-between items-center py-2.5 mt-3">
                      <p className="text-sm text-gray-400">Total</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* THIS IS FOR PAYMENT */}
            {selectedInfo === 'payment' && (
              <div className="flex flex-col md:flex-row gap-4">
                {/* THIS IS FOR PAYMENT OPTIONS */}
                <div className="bg-white border border-gray-200 w-full md:flex-2 p-4 rounded shadow-xs">
                  <h1 className="font-semibold">
                    Select Payment Option
                  </h1>
                  <p className="text-sm text-gray-400 mt-2">
                    All transactions are secure and encrypted.
                  </p>

                  {/* OPTIONS */}
                  <div className="mt-4">
                    <span className='gap-2 flex border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
                      <input
                        type="radio"
                        name="Rooms"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="cursor-pointer"
                      />
                      <p className="text-gray-700 leading-relaxed text-sm">PayPal</p>
                    </span>

                    <div className="gap-2 my-4 border border-gray-300 rounded-md p-3 cursor-pointer">
                      <span className='flex gap-2'>
                        <input
                          type="radio"
                          name="Rooms"
                          value="creditcard"
                          checked={paymentMethod === "creditcard"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="cursor-pointer"
                        />
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

                      <div className="flex flex-col md:flex-row gap-4 mt-4">
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
                      <input
                        type="radio"
                        name="Rooms"
                        value="GooglePay"
                        checked={paymentMethod === "GooglePay"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="cursor-pointer"
                      />
                      <p className="text-gray-700 leading-relaxed text-sm">Google pay</p>
                    </span>

                    <span className='gap-2 my-4 flex border border-gray-300 rounded-md p-3 cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
                      <input
                        type="radio"
                        name="Rooms"
                        value="CashOnDelivery"
                        checked={paymentMethod === "CashOnDelivery"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="cursor-pointer"
                      />
                      <p className="text-gray-700 leading-relaxed text-sm">Cash on delivery</p>
                    </span>

                    <button 
                      onClick={() => {
                      if (!paymentMethod) {
                        setErrors({ payment: true });
                        return;
                      }

                      const id = generateOrderId();
                      setOrderId(id);
                      setSelectedInfo("complete");

                      setTimeout(() => {
                        clearCart();
                        router.push("/");
                      }, 60000);
                    }}
                    className="my-3 p-2 w-full rounded-xl shadow-md cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a]">
                      Pay | Tsh:{finalTotal.toFixed(2)}
                    </button>
                  </div>
                </div>

                {/* THIS IS FOR PAYMENT SUMMARY */}
                <div className="bg-white border border-gray-200 w-full md:flex-1 p-4 h-fit rounded shadow-xs">
                  <h1 className="font-bold border-b border-gray-200 p-3">
                    Your Cart (<span className=''>{products.length}</span>)
                  </h1>

                  <div className="my-4 bg-white border border-gray-200 p-3 rounded-md">
                    <h1 className="leading-relaxed font-bold text-[15px]">Order summary</h1>
                    <div className="flex justify-between items-center py-1.5">
                      <p className="text-sm text-gray-400">Subtotal</p>
                      <span className="text-sm text-gray-600">Tshs: {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Delivery cost</p>
                      <span className="text-sm text-gray-600">Tshs: {deliveryCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Tax</p>
                      <span className="text-sm text-gray-600">Tshs: {tax}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Discount</p>
                      <span className="text-sm text-gray-600">10%</span>
                    </div>

                    {/* THIS IS FOR TOTAL */}
                    <div className="flex border-t border-gray-200 justify-between items-center py-2.5 mt-3">
                      <p className="text-sm text-gray-400">Total</p>
                      <span className="text-sm font-extrabold text-gray-600">Tshs: {finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* THIS IS FOR COMPLETE */}
            {selectedInfo === 'complete' && (
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* SUCCESS MESSAGE */}
               <div className="bg-white border border-gray-200 w-full md:flex-2 p-4 rounded shadow-xs">

                  {/* SUCCESS ICON */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#ffd061] p-4 rounded-full shadow-md">
                      <FaCheck className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h1 className="text-2xl text-center font-bold">
                    Payment Successful
                  </h1>

                  <p className="text-gray-500 text-center mt-2 text-sm">
                    Thank you for your purchase. Your order has been successfully placed.
                  </p>

                  <p className="text-gray-400 text-center mt-1 text-sm">
                    A confirmation email has been sent with your order details.
                  </p>

                  <div className="mt-6 text-center border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      Estimated delivery time:
                    </p>
                    <p className="font-semibold text-gray-700">
                      2 - 5 Business Days
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center gap-4">
                    <button
                      onClick={() => {
                        clearCart()
                      }}
                      className="px-4 py-2 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <Link href="/">
                        Confirm Order
                      </Link>
                    </button>

                    <button className="px-4 py-2 cursor-pointer rounded-lg bg-[#ffd061] hover:bg-[#f5c84a] transition shadow-md">
                      Track Order
                    </button>
                  </div>
                </div>

                {/* FINAL ORDER SUMMARY */}
                <div className="bg-white border border-gray-200 w-full md:flex-1 p-4 h-fit rounded shadow-xs">
                  <h1 className="font-bold border-b border-gray-200 p-3">
                    Order Summary
                  </h1>

                  <div className="my-4 bg-white border border-gray-200 p-3 rounded-md">
                    <h1 className="text-sm text-gray-400 flex justify-between items-center mt-2">
                      <p>Order ID:</p> <span className="font-semibold text-gray-600">{orderId}</span>
                    </h1>
                    <div className="flex justify-between items-center py-1.5">
                      <p className="text-sm text-gray-400">Items</p>
                      <span className="text-sm text-gray-600">
                        {products.length}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1.5">
                      <p className="text-sm text-gray-400">Subtotal</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Delivery</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {deliveryCost}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-sm text-gray-400">Tax</p>
                      <span className="text-sm text-gray-600">
                        Tshs: {tax}
                      </span>
                    </div>

                    <div className="flex border-t border-gray-200 justify-between items-center py-2.5 mt-3 font-bold">
                      <p>Total Paid</p>
                      <span>
                        Tshs: {finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {currentStepIndex > 0 && (
                <button
                  onClick={goBack}
                  className="bg-gray-300 cursor-pointer px-4 py-2 rounded hover:bg-gray-400"
                >
                  Back
                </button>
              )}

              {currentStepIndex < steps.length - 1 && (
                <button
                 onClick={() => {
                      let newErrors = {};

                      if (!formData.email) newErrors.email = true;
                      if (!formData.phone) newErrors.phone = true;
                      if (!formData.location) newErrors.location = true;

                      setErrors(newErrors);

                      if (Object.keys(newErrors).length === 0) {
                        setSelectedInfo("payment");
                      }
                      () => goNext()
                    }}
                  className="bg-[#ffd061] cursor-pointer px-4 py-2 rounded hover:bg-[#f5c84a]"
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