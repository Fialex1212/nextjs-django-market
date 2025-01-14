"use cilent";

import { create } from "zustand";

const usePriceStore = create((set) => ({
  priceValue: [0, 1000],
  setPriceValue: (price) => set({ priceValue: price }),
}));

export default usePriceStore;
