"use cilent";

import { create } from "zustand";

const useColorsStore = create((set) => ({
  selectedColors: [],
  setSelectedColors: (color) => set({ selectedColors: color }),
}));

export default useColorsStore;
