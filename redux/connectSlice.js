import { createSlice } from '@reduxjs/toolkit'

export const connectSlice = createSlice({
  name: "_connect",
  initialState: {
    value: false,
  },
  reducers: {
    connected: (state) => {
      state.value = true;
    },
    connecting: (state) => {
        state.value = false;
      },
    disconnected: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { connected, connecting, disconnected } = connectSlice.actions

export default connectSlice.reducer