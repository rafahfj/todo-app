import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, handleRegister } from "../../services/auth/authAPI";

// Thunk ditempatkan disini

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    error: null,
    loading: false,
  },
  reducers: {
    userLogout: (state) => {
      state = {
        user: null,
        error: null,
        loading: false,
      };
    },
    setError: (state) => {
      state.error = null;
    },
    setUserLocal: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(handleRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleRegister.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(handleRegister.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(handleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { userLogout, setError, setUserLocal } = authSlice.actions;
export default authSlice.reducer;
