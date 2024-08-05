import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'Category'
}

const selectModalSlice = createSlice({
    name: 'selectModal',
    initialState,
    reducers: {
        setSelectModal: (state, action) => {
            state.value = action.payload
        },
        clearSelectModal: (state) => {
            state.value = 'Category'
        }
    }
})

export const { setSelectModal, clearSelectModal } = selectModalSlice.actions
export default selectModalSlice.reducer