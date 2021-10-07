import { createSlice } from "@reduxjs/toolkit";
import { auth } from "utils/firebaseConfig";

const initialState = JSON.parse(localStorage.getItem("auth")) || {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    loginSuccess: (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return action.payload;
    },
    logout: (state, action) => {
      localStorage.clear();
      auth.signOut();
      return {};
    },
  },
});

export const { login, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
