import { createSlice } from "@reduxjs/toolkit";

import getItemFromLocalStorage from "../components/hook/getItemFromLocalStorage";

const userLoged = getItemFromLocalStorage("currentUser") || null;
const initialUserState = { user: userLoged };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    ON_LOGIN(state, action) {
      state.user = action.payload;
    },
    ON_LOGOUT(state) {
      state.user = userLoged || {};
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
