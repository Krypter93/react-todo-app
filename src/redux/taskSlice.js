import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
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
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        modifyTaskCategory: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {...task,
                        category: action.payload.category
                    }
                }
                return task 
            })

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        modifyTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        description: action.payload.description
                    }
                }
                return task
            })

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    }
})

export const { addTask, deleteTask, modifyTaskCategory, modifyTask } = taskSlice.actions
export default taskSlice.reducer