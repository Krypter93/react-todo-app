import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        // Refactor this later
        addTask: (state, action) => {
            state.tasks.push ({
                id : action.payload.id,
                description : action.payload.description,
                category : action.payload.category,
                createdAt : action.payload.createdAt})
            
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer