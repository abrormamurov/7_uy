import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});

export const { addItem } = counterSlice.actions;

export default counterSlice.reducer;
