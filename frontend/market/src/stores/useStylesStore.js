"use cilent";

import { create } from "zustand";

const useStylesStore = create((set) => ({
  selectedStyles: [],
  setSelectedStyles: (style) => set({ selectedStyles: style }),
}));

export default useStylesStore;
