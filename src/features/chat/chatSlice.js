import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  firstFetching: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getRoom: (state, action) => {
      state.status = "fetching";
    },
  },
});
