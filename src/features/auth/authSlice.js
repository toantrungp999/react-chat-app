import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("auth")) || {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));

      return action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
