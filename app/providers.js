"use client";

import { StoreProvider } from "./hooks/context/StoreContext";

export function Providers({ children }) {
  return (
  <StoreProvider>
    {children}
  </StoreProvider>
);
}
