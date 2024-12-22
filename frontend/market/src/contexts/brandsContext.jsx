"use client";

import { createContext, useState, useContext } from "react";

//Creating a context
const BrandsSortingContext = createContext(undefined);

//Provider
export const BrandsSortingProvider = ({ children }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  return (
    <BrandsSortingContext.Provider
      value={{ selectedBrands, setSelectedBrands }}
    >
      {children}
    </BrandsSortingContext.Provider>
  );
};

//Hook to use context
export const useBrandsSorting = () => {
  const context = useContext(BrandsSortingContext);
  if (!context) {
    throw new Error(
      "useBrandsSorting must be used within BrandsSortingProvider"
    );
  }
  return context;
};
