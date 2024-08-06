import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'Incomplete'
}

const mainSelectSlice = createSlice({
    name: 'mainSelect',
    initialState,
    reducers: {
        setMainSelect: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setMainSelect } = mainSelectSlice.actions
export default mainSelectSlice.reducer

