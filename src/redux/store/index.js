import { combineReducers } from "redux";
import MeteoReducer from "../reducers/MeteoReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "meteo",
  storage: storage,
  blacklist: ["content", "fiveDaysContent", "location", "selectedDay"],
};

const persistedMeteoReducer = persistReducer(persistConfig, MeteoReducer);

const rootReducer = combineReducers({
  meteo: persistedMeteoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
