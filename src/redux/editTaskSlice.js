import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: null
}

const editTaskSlice = createSlice({
    name: 'editTask',
    initialState,
    reducers: {
        editState: (state, action) => {
            state.edit = action.payload
        }
    }
})

export const { editState } = editTaskSlice.actions
export default editTaskSlice.reducer