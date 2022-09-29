import { createSlice } from '@reduxjs/toolkit'

export const ConnectModalSlice = createSlice({
  name: "_connectModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    ShowModal: (state) => {
      state.isOpen = true;
    },
    HideModal: (state) => {
        state.isOpen = false;
      },
  },
});

// Action creators are generated for each case reducer function
export const { ShowModal, HideModal } = ConnectModalSlice.actions

export default ConnectModalSlice.reducer