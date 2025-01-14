"use cilent";

import { create } from "zustand";

const useSizesStore = create((set) => ({
  selectedSizes: [],
  setSelectedSizes: (size) => set({ selectedSizes: size }),
}));

export default useSizesStore;
