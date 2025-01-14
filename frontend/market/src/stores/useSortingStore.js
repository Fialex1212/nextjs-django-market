const useSortingStore = create((set) => ({
  sortingOption: "Low to High",
  setSortingOption: (option) => set({ sortingOption: option }),
}));
