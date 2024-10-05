import { createSlice } from "@reduxjs/toolkit";

// thunk ditempatkan disini

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    lists: [],
    status: "idle",
  },
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.lists.find((todo) => todo.id === action.payload);
      todo.checked ? (todo.checked = false) : (todo.checked = true);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
