import { createSlice } from '@reduxjs/toolkit'

export const connectSlice = createSlice({
  name: "_connect",
  initialState: {
    value: 0,
  },
  reducers: {
    connected: (state) => {
      state.value = 1;
    },
    connecting: (state) => {
        state.value = 2;
      },
    disconnected: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { connected, connecting, disconnected } = connectSlice.actions

export default connectSlice.reducer