import { createSlice } from "@reduxjs/toolkit";

const visitedSlice = createSlice({
  name: "visited",
  initialState: {
    isVisited: false,
  },
  reducers: {
    setVisited: (state, action) => {
      state.isVisited = action.payload;
    },
  },
});

export const { setVisited } = visitedSlice.actions;
export default visitedSlice.reducer;
