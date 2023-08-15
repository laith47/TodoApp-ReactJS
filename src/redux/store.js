import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './task'
import {reducer as toastrReducer} from 'react-redux-toastr'
export const store = configureStore({
  reducer: {
    task:TaskReducer,
    toastr: toastrReducer,
  },
})