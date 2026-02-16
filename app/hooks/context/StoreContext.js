"use client";
import { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addProduct = (product) => {
        const updatedProducts = state.products;
        updatedProducts.push(product);
         
        updatePrice(updatedProducts);

        dispatch({ 
            type: 'add', 
            payload: updatedProducts 
        });
    }

    const removeProduct = (product) => {
        const updatedProducts = state.products.filter
        ((currentProduct) => currentProduct.id !== product.id);

        updatePrice(updatedProducts);

        dispatch({ 
            type: 'remove', 
            payload: updatedProducts 
        });
    }

     const updatePrice = (product) => {
        let total = 0;
        product.forEach((item) => {
        if (item && item.price) {
            total += Number(item.price);
        }
});


        dispatch({ 
            type: 'update', 
            payload: total
        });
    }

    const value = {
        total: state.total,
        products: state.products,
        addProduct,
        removeProduct,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};


