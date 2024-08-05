import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"
import taskReducer from "./taskSlice"
import inputReducer from "./inputSlice"
import selectModalReducer from "./selectModalSlice"

const store = configureStore({
    reducer: {
        modalTask: modalReducer,
        task: taskReducer,
        inputTask: inputReducer,
        selectModal: selectModalReducer
    }
})

export default store