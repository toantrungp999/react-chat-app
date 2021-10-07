import { takeEvery } from "redux-saga/effects";
import { addDocument } from "utils/firebaseServices";
import { addRoom } from "./chatSlice";

function* handleAddRoom(action) {
  try {
    yield addDocument("rooms", action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* chatSaga() {
  yield takeEvery(addRoom.toString(), handleAddRoom);
}

export default chatSaga;
