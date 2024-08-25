import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: ''
}

const editInputSlice = createSlice({
    name: 'editInput',
    initialState,
    reducers: {
        setEditInput: (state, action) => {
            state.input = action.payload
        },

        clearEditInput: (state) => {
            state.input = ''
        }
    }
})

export const { setEditInput, clearEditInput } = editInputSlice.actions
export default editInputSlice.reducer