import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"

const store = configureStore({
    reducer: {
        modalTask: modalReducer
    }
})

export default store