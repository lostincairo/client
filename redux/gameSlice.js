import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  step: null,
}


export const gameSlice = createSlice({
  name: "_game",
  initialState,
  reducers: {
    setStep: (state, action) => {
        state.step = action.payload;
    },

  }
});

// Action creators are generated for each case reducer function
export const { setStep } = gameSlice.actions

export default gameSlice.reducer