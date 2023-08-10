import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './task'
export const store = configureStore({
  reducer: {
    task:TaskReducer    
  },
})