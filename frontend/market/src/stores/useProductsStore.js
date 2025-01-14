const useProductsStore = create((set) => ({
  products: [],
  filteredProducts: [],
  setProducts: (products) => set({ products }),
  setFilteredProducts: (filtered) => set({ filteredProducts: filtered }),
}));
