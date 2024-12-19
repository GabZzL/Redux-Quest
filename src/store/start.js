import { createSlice } from "@reduxjs/toolkit";

const initialStartState = { isStarted: false };

const startSlice = createSlice({
  name: "start",
  initialState: initialStartState,
  reducers: {
    start(state) {
      state.isStarted = true;
    },
    end(state) {
      state.isStarted = false;
    },
  },
});

export const startActions = startSlice.actions;
export default startSlice.reducer;
