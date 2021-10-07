import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  firstFetching: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    initialRoom: (state, action) => {
      state.firstFetching = true;
      state.rooms = action.payload;
    },
    addRoom: (state, action) => {},
  },
});

export const { initialRoom, addRoom } = chatSlice.actions;
export default chatSlice.reducer;
