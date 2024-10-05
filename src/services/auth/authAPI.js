import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { child, get, ref, set } from "firebase/database";
import { getFriendlyErrorMessage } from "../../firebase/errorMessages";
import { auth, database } from "../../firebase/firebaseConfig";

// pisahkan thunk dan proses API yang ada di file ini

export const registerAPI = async ({ email, password }) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => res.user)
    .catch((error) => getFriendlyErrorMessage(error.code));
};

export const loginAPI = async ({ email, password }) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((res) => res.user)
    .catch((err) => getFriendlyErrorMessage(err.code));
};

export const writeUserToDB = (
  { displayName, email, uid, photoURL },
  password
) => {
  set(ref(database, "users/" + uid), {
    email: email,
    username: displayName,
    uid: uid,
    photoURL: photoURL,
    password: password,
  });
};

export const readUserFromDB = async ({ uid }) => {
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
