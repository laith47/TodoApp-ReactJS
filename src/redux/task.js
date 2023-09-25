import { createSlice } from '@reduxjs/toolkit'

const getTasks = {
    retrievedTasks: JSON.parse(localStorage.getItem('tasks')) || [],
}
const initialState = {
    taskArray: getTasks.retrievedTasks,
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        postTask: (state, action, e) => {
            state.taskArray.unshift(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.taskArray));
        },
        removeTask: (state, action) => {
            state.taskArray = [...state.taskArray.filter(task => task.id !== action.payload)]
            localStorage.setItem('tasks', JSON.stringify(state.taskArray));

        },
        editTask: (state, action) => {
            const newTaskTitle = action.payload.taskTitle;
            const task = action.payload.task;
            const taskId = task.id;
            const previousElement = state.taskArray.filter(task => task.id === taskId);
            previousElement[0].taskTitle = newTaskTitle;
            localStorage.setItem('tasks', JSON.stringify(state.taskArray));
        },
        toggleTask: (state, action) => {

            state.taskArray.forEach((item) => {
                if (item.id === action.payload) {
                    item.isDone = !item.isDone;
                }
            })
            localStorage.setItem('tasks', JSON.stringify(state.taskArray));

        },
        toggleEditTask: (state, action) => {
            state.taskArray.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.isEdit = !item.isEdit;
                }
            })

            localStorage.setItem('tasks', JSON.stringify(state.taskArray));
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { postTask, removeTask, incrementByAmount, toggleTask, editTask, toggleEditTask } = taskSlice.actions

export default taskSlice.reducer