import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, database } from "../../firebase/firebaseConfig";
import { child, get, ref, set } from "firebase/database";
import { getFriendlyErrorMessage } from "../../firebase/errorMessages";

// pisahkan thunk dan proses API yang ada di file ini

export const handleRegister = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      const user = auth.currentUser;
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
    } catch (error) {
      return rejectWithValue(getFriendlyErrorMessage(error.code));
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
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
    } catch (error) {
      return rejectWithValue(getFriendlyErrorMessage(error.code));
    }
  }
);

const writeUserToDB = ({ displayName, email, uid, photoURL }, password) => {
  set(ref(database, "users/" + uid), {
    email: email,
    username: displayName,
    uid: uid,
    photoURL: photoURL,
    password: password,
  });
};

const readUserFromDB = async ({ uid }) => {
  const dbRef = ref(database);
  return await get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      return error;
    });
};
