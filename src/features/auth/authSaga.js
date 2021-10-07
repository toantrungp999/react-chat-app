import { put, takeLatest } from "redux-saga/effects";
import { login, loginSuccess } from "./authSlice";

import firebase, { auth } from "../../utils/firebaseConfig";
import { addDocument } from "utils/firebaseServices";

function* handleOnLogin() {
  const ggProvider = new firebase.auth.GoogleAuthProvider();
  if (auth) auth.signOut();
  try {
    const data = yield auth.signInWithPopup(ggProvider);

    const { uid, email, displayName, photoURL } = data.user;
    const { providerId, isNewUser } = data.additionalUserInfo;
    if (isNewUser) {
      yield addDocument("users", {
        uid,
        email,
        displayName,
        photoURL,
        providerId,
      });
    }

    yield put(loginSuccess({ uid, email, displayName, photoURL }));
  } catch (error) {
    console.log("error");
  }
}

function* authSaga() {
  yield takeLatest(login.toString(), handleOnLogin);
}
export default authSaga;
