import React from 'react';
import './AddTask.css'
import {
   useDispatch,
} from 'react-redux';
import { useState } from 'react';
import { postTask } from '../../redux/task';


function AddTask({ darkMode }) {
   const isDarkMode = darkMode;
   const [taskTitle, setTaskTitle] = useState('');
   const [creationDate] = useState(new Date().toISOString().substring(0, 10));
   const [isDone] = useState(false);
   const newTaskObject = { id: crypto.randomUUID(), taskTitle: taskTitle, creationDate: creationDate, isDone: isDone };
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(postTask(newTaskObject));
      const formToReset = document.getElementById('create-task');
      formToReset.reset();
   }
   return (
      <div>
         <form id="create-task" style={{ backgroundColor: isDarkMode ? '#205295' : 'white' }} className="task-form" onSubmit={handleSubmit}
         >
            <div className="task-container">
               <input className="input" id="outlined-basic" variant="outlined" onChange={(e) => {
                  setTaskTitle(e.target.value)
               }}></input>
               <button className='create-button'
               >Create Task </button>
            </div>
         </form>
      </div>
   )
}

AddTask.propTypes = {};

AddTask.defaultProps = {};

export default AddTask;
