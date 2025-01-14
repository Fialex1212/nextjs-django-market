const usePaginationStore = create((set) => ({
  currentPage: 1,
  itemsPerPage: 9,
  incrementPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
}));
