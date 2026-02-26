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
    const existingProduct = state.products.find((item) => item.id === product.id);
    
    let updatedProducts;
    if (existingProduct) {
      // If product already exists, increment its quantity
      updatedProducts = state.products.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      // If new product, add it with quantity 1
      updatedProducts = [...state.products, { ...product, quantity: 1 }];
    }

    const total = updatedProducts.reduce(
      (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
      0,
    );

    dispatch({ type: "add", payload: updatedProducts });
    dispatch({ type: "update", payload: total });
  };

  const incrementProduct = (product) => {
    const updatedProducts = state.products.map((item) =>
      item.id === product.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    const total = updatedProducts.reduce(
      (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
      0
    );

    dispatch({ type: "increment", payload: updatedProducts });
    dispatch({ type: "update", payload: total });
  };

  const decrementProduct = (product) => {
    const updatedProducts = state.products.map((item) =>
      item.id === product.id && (item.quantity || 1) > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    const total = updatedProducts.reduce(
      (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
      0
    );

    dispatch({ type: "decrement", payload: updatedProducts });
    dispatch({ type: "update", payload: total });
  };
  const removeProduct = (product) => {
    const updatedProducts = state.products.filter(
      (item) => item.id !== product.id,
    );

    const total = updatedProducts.reduce(
      (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
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
        incrementProduct,
        decrementProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
