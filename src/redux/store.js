import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"
import taskReducer from "./taskSlice"

const store = configureStore({
    reducer: {
        modalTask: modalReducer,
        task: taskReducer
    }
})

export default store