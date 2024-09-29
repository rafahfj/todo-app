import { createSlice } from "@reduxjs/toolkit";

const visitedSlice = createSlice({
  name: "visited",
  initialState: {
    isVisited: false,
    onScreen: 1,
  },
  reducers: {
    setVisited: (state, action) => {
      state.isVisited = action.payload;
    },
    setScreen: (state, action) => {
      state.onScreen = state.onScreen + action.payload;
    },
  },
});

export const { setVisited, setScreen } = visitedSlice.actions;
export default visitedSlice.reducer;
