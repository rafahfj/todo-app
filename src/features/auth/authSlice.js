import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginAPI,
  readUserFromDB,
  registerAPI,
  writeUserToDB,
} from "../../services/auth/authAPI";
import { updateProfile } from "firebase/auth";

// Thunk ditempatkan disini

export const handleRegister = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const user = await registerAPI({ email, password });
      if (!user.uid) {
        return rejectWithValue(user);
      }
      await updateProfile(user, { displayName: username });
      await writeUserToDB(user, password);
      const dataUser = await readUserFromDB(user);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          username: dataUser.username,
          email: dataUser.email,
          uid: dataUser.uid,
          photoURL: dataUser.photoURL,
        })
      );
      return {
        username: dataUser.username,
        email: dataUser.email,
        uid: dataUser.uid,
        photoURL: dataUser.photoURL,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await loginAPI({ email, password });
      if (!user.uid) {
        return rejectWithValue(user);
      }
      const dataUser = await readUserFromDB(user);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          username: dataUser.username,
          email: dataUser.email,
          uid: dataUser.uid,
          photoURL: dataUser.photoURL,
        })
      );
      return {
        username: dataUser.username,
        email: dataUser.email,
        uid: dataUser.uid,
        photoURL: dataUser.photoURL,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

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
