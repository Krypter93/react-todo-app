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
        }
    }
})

export const { setInput } = inputSlice.actions
export default inputSlice.reducer