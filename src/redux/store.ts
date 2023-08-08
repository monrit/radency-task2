import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesSlice";
import modalReducer from "./reducers/modalSlice";

export const rootReducer = combineReducers({
    notesReducer,
    modalReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = setupStore();

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType["dispatch"];
