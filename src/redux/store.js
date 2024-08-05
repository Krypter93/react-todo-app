import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"
import taskReducer from "./taskSlice"
import inputReducer from "./inputSlice"

const store = configureStore({
    reducer: {
        modalTask: modalReducer,
        task: taskReducer,
        inputTask: inputReducer
    }
})

export default store