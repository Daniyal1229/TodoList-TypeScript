import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice`";

export const store = configureStore({
    reducer: {
        todos:todoReducer
    },
})

//! we need to specify what type of value will be having in state inside useSelector

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;