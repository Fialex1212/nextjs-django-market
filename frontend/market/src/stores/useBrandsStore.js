"use client";

import { create } from "zustand";

const useBrandsStore = create((set) => ({
  selectedBrands: [],   
  setSelectedBrands: (brands) => set({ selectedBrands: brands }),
}));

export default useBrandsStore;
