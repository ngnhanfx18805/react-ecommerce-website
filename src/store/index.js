import { configureStore } from "@reduxjs/toolkit";
import popupRedux from "./popupRedux";
import userRedux from "./userRedux";
import isLogedRedux from "./isLoged";
import categoryRedux from "./categoryRedux";
import cartRedux from "./cartState";
const store = configureStore({
  reducer: {
    popup: popupRedux,
    user: userRedux,
    isLoged: isLogedRedux,
    category: categoryRedux,
    cart: cartRedux,
  },
});

export default store;
