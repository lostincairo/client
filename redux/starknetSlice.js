import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
}


export const starknetSlice = createSlice({
  name: "_starknet",
  initialState,
  reducers: {
  }
});

// Action creators are generated for each case reducer function
export const { selectCell, highlightCell, movePlayer } = starknetSlice.actions

export default starknetSlice.reducer