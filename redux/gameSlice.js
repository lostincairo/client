import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  step: null,
  lobby_step: 1,
}


export const gameSlice = createSlice({
  name: "_game",
  initialState,
  reducers: {
    setStep: (state, action) => {
        state.step = action.payload;
    },
    setLobbyStep: (state, action) => {
        state.lobby_step = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setStep, setLobbyStep } = gameSlice.actions

export default gameSlice.reducer