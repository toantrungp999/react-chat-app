import { all } from "redux-saga/effects";
import authSaga from "features/auth/authSaga";
import chatSaga from "features/chat/chatSaga";

function* rootSaga() {
  yield all([authSaga(), chatSaga()]);
}

export default rootSaga;
