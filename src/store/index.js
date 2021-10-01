import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart.js";

import authSlice from "./auth-slice.js";

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer },
});

export default store;
