import { combineReducers } from "redux";
import MeteoReducer from "../reducers/MeteoReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  meteo: MeteoReducer,
});
const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export default store;
