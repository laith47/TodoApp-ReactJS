import React from 'react';
import TextField from '@mui/material/TextField';
import './AddTask.css'
import {
   useDispatch,
} from 'react-redux';
import { useState } from 'react';
import { postTask } from '../../redux/task';


function AddTask() {
   const [taskTitle, setTaskTitle] = useState('');
   const [creationDate] = useState(new Date().toISOString().substring(0, 10));
   const [isDone] = useState(false);
   const newTaskObject = { id: crypto.randomUUID(), taskTitle: taskTitle, creationDate: creationDate, isDone: isDone };
   const dispatch = useDispatch();
   const handleSubmit = (e) => {

      e.preventDefault();
      dispatch(postTask(newTaskObject));

   }
   return (
      <div>
         <form className="task-form" onSubmit={handleSubmit}
         >
            <TextField className="input" id="outlined-basic" variant="outlined" onChange={(e) => {
               setTaskTitle(e.target.value)
            }}></TextField>
            <button className='create-button'
            >Create Task </button>
         </form>
      </div>
   )
}

AddTask.propTypes = {};

AddTask.defaultProps = {};

export default AddTask;
