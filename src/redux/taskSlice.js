import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: '',
            description: '',
            category: '',
            createdAt: '',
        }
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        // Refactor this later
        addTask: (state, action) => {
            state.tasks.push(action.payload)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer