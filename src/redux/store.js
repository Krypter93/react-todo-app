import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"
import taskReducer from "./taskSlice"
import inputReducer from "./inputSlice"
import selectModalReducer from "./selectModalSlice"
import mainSelectReducer from "./mainSelectSlice"

const store = configureStore({
    reducer: {
        modalTask: modalReducer,
        task: taskReducer,
        inputTask: inputReducer,
        selectModal: selectModalReducer,
        mainSelect: mainSelectReducer
    }
})

export default store