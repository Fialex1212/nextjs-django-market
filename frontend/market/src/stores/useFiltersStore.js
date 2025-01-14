const useFiltersStore = create((set) => ({
  priceRange: [0, 1000],
  selectedColors: [],
  selectedSizes: [],
  selectedStyles: [],
  setPriceRange: (min, max) => set({ priceRange: [min, max] }),
  setSelectedColors: (colors) => set({ selectedColors: colors }),
  setSelectedSizes: (sizes) => set({ selectedSizes: sizes }),
  setSelectedStyles: (styles) => set({ selectedStyles: styles }),
}));
