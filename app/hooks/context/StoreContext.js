"use client";
import { createContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : init;
    }
    return init;
  });

  const addProduct = (product) => {
    const updatedProducts = [...state.products, product];

    const total = updatedProducts.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0,
    );

    dispatch({ type: "add", payload: updatedProducts });
    dispatch({ type: "update", payload: total });
  };

  const removeProduct = (product) => {
    const updatedProducts = state.products.filter(
      (item) => item.id !== product.id,
    );

    const total = updatedProducts.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0,
    );

    dispatch({ type: "remove", payload: updatedProducts });
    dispatch({ type: "update", payload: total });
  };

  const clearCart = () => {
    dispatch({ type: "clear" });
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <StoreContext.Provider
      value={{
        total: state.total,
        products: state.products,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
