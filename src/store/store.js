import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import visitedSlice from "../features/visited/visitedSlice";
import todoSlice from "../features/todos/todoSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
    visited: visitedSlice,
  },
});
