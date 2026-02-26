import { StoreContext } from "@/app/hooks/context/StoreContext";
import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";

function CartProduct({ item }) {
  const { removeProduct, incrementProduct, decrementProduct} = useContext(StoreContext);
  
  // Extract numeric price from string like "Tshs 151.20"
  const getNumericPrice = (price) => {
    if (typeof price === 'string') {
      const numericValue = parseFloat(price.replace(/[^\d.]/g, ''));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return typeof price === 'number' ? price : 0;
  };

  const numericPrice = getNumericPrice(item.price);
  
  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-md rounded-xl p-4 mb-4 ">
      
      {/* LEFT SIDE */}
      <div className="flex gap-4 items-center">
        <img
          src={item.image}
          alt={item.title}
          className="md:w-32 md:h-32 w-24 h-24 object-cover rounded-lg"
        />

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">{item.title}</h2>

          <p className="text-gray-600 text-sm">
            Price: <span className="font-medium">${numericPrice.toFixed(2)}</span>
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => decrementProduct(item)}
              className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300"
            >
              <TiMinus />
            </button>

            <span className="font-semibold text-md">
              {item.quantity || 1} 
            </span>

            <button
              onClick={() => incrementProduct(item)}
              className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-300"
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE TOTAL*/}
      <div className="text-right space-y-3">
        <p className="text-lg font-bold text-green-600">
          Tshs: {(numericPrice * (item.quantity || 1)).toFixed(2)}
        </p>

        <button
          onClick={() => removeProduct(item)}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProduct;