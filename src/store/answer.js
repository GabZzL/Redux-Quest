import { createSlice } from "@reduxjs/toolkit";

const initialAnswerState = { isAnswer: false, message: null };

const answerSlice = createSlice({
  name: "answer",
  initialState: initialAnswerState,
  reducers: {
    setAnswer(state, action) {
      state.isAnswer = true;
      state.message = action.payload;
    },
    resetAnswer(state) {
      state.isAnswer = false;
      state.message = null;
    },
  },
});

export const answerActions = answerSlice.actions;
export default answerSlice.reducer;
