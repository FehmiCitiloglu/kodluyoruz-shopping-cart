import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    filteredProducts: [],
    isFiltered: false,
    product: {
      id: 0,
      image: "",
      title: "",
      category: "",
      price: 0,
      description: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  },
  reducers: {
    getProducts(state, action) {
      state.products.map((product) => state.categories.push(product.category));
      state.categories = [...new Set(state.categories)];

      state.isFiltered = false;
      state.products = action.payload;
    },
    filterProducts(state, action) {
      state.isFiltered = true;
      const category = action.payload;
      console.log("category", category[0]);
      state.filteredProducts = state.products.filter(
        (product) => product.category === category[0]
      );
      console.log(state.products);
    },
    getProductById(state, action) {
      const id = +action.payload;
      state.product = state.products.find((product) => +product.id === id);
    },
    sortProducts(state, action) {
      const comparison = action.payload;
      state.products = state.products.sort(
        (a, b) => a.comparison - b.comparison
      );
    },
  },
});

export const productActions = productsSlice.actions;

export default productsSlice;
