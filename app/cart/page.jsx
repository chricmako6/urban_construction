"use client";
import React, {useContext, useState} from 'react'
import Link from 'next/link';
import Navbar from '@/component/01/navbar'
import { StoreContext } from '@/app/hooks/context/StoreContext';
import Footer from '@/component/01/footer';
import CartProduct from '@/component/03/cartProduct';

function pageCart() {
  const { products, clearCart } = useContext(StoreContext);
  
  // Helper to extract numeric price
  const getNumericPrice = (price) => {
    if (typeof price === "string") {
      const numericValue = parseFloat(price.replace(/[^\d.]/g, ""));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return typeof price === "number" ? price : 0;
  };

  // Calculate subtotal from all cart items
  const subtotal = products.reduce((acc ,  item) => {
  const numericPrice = getNumericPrice(item.price);
  const itemTotal = numericPrice * (item.quantity || 1);

   return acc + itemTotal;
  }, 0);

  // Other calculations
  const deliveryCost = 20;
  const tax = 5;
  const discount = subtotal * 0.1;

  const finalTotal = subtotal + deliveryCost + tax - discount;

  return (
    <div className='max-w-full'>
      <Navbar />
      <div className="p-4">
        <div className="bg-white my-20 rounded-lg  shadow-md p-4 md:max-w-7xl mx-auto">
          {/* THIS IS FOR CART */}
          <div className='border-b border-gray-300 p-4 flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold'>Your Cart</h1>
              <p className='text-leading'> {products.length} Products in Your Cart</p>
            </div>
            <div>
              <button onClick={() =>clearCart()} className='cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-4'>
                Clear Cart
              </button>
            </div>
          </div>

          <div className="md:flex gap-4">
            {/* THIS IS FOR CART ITEMS */}
              <div className='mt-5 md:w-6xl max-w-full'>
              {products.map((product ) => 
                <CartProduct key={product.id} item={product} />
              )}

            </div>

            {/* THIS IS FOR CHECKOUT */}
            <div className="mt-5 md:w-xl ">
              <h2 className='text-xl font-bold mb-4'>Checkout</h2>

            

              <div className="bg-gray-100 flex flex-col p-4 rounded-lg shadow-md">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{products.length}</span>
                </div>


                <div className="flex justify-between py-1">
                  <span>Delivery Cost</span>
                  <span>$20</span>
                </div>

                <div className="flex justify-between py-1">
                  <span>Tax</span>
                  <span>$5</span>
                </div>


                <div className="flex justify-between py-1">
                  <span>Discount</span>
                  <span>10%</span>
                </div>
                
                <div className="flex justify-between py-1 border-b border-gray-300 mb-4 pb-4">
                  <span>Subtotal</span>
                  <span className="text-green-600">Tshs: <b>{subtotal.toFixed(2)}</b></span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>

                  <button className='mt-4 cursor-pointer bg-[#ffd061] hover:bg-[#f5c84a] font-semibold py-2 rounded-lg transition-colors duration-300'>
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                  </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default pageCart
