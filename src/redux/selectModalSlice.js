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
        }
    }
})

export const { setSelectModal } = selectModalSlice.actions
export default selectModalSlice.reducer