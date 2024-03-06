import { createSlice } from "@reduxjs/toolkit";
import getItemFromLocalStorage from "../components/hook/getItemFromLocalStorage";

const isLoged = getItemFromLocalStorage("currentUser") || false; //Kiểm tra xem có người dùng hiện tại trong LocalStorage hay ko? Nếu ko thì trạng thái là false.
const initialisLogedState = { isLoged: isLoged ? true : false };

const isLogedSlice = createSlice({
  name: "isLoged",
  initialState: initialisLogedState,
  reducers: {
    ON_LOGIN(state) {
      state.isLoged = true;
      // console.log("đây là isLoged đang đăng nhập:", state.isLoged);
    },
    ON_LOGOUT(state) {
      state.isLoged = false;
      // console.log("đây là isLoged đang đăng nhập:", state.isLoged);
    },
  },
});

export const isLogedActions = isLogedSlice.actions;

export default isLogedSlice.reducer;
