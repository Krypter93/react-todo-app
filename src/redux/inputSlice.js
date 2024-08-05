import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: ''
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload
        },
        clearInput: (state) => {
            state.input = ''
        }
    }
})

export const { setInput, clearInput } = inputSlice.actions
export default inputSlice.reducer