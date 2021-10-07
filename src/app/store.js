import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import chatSlice from "features/chat/chatSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
