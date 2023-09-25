import React from 'react';
import CreateTask from '../CreateTask/CreateTask';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import MaterialButton from '../MaterialButton/MaterialButton';

function Task() {
   const setDarkMode = () => {
      toggleDarkMode(!getDarkMode());
      localStorage.setItem('isDarkMode', !getDarkMode());
   }
   const getDarkMode = () => {
      const savedMode = localStorage.getItem('isDarkMode');
      return savedMode ? JSON.parse(savedMode) : false;
   }

   const [isDarkMode, toggleDarkMode] = useState(getDarkMode())
   const { taskArray } = useSelector((state) => state.task);
   const [showAddTask, toggleAddTask] = useState(false);
   console.log(taskArray);

   return (

      <div className="main-container">
         <div style={{ backgroundColor: isDarkMode ? '#0A2647' : 'white' }} className="inner-container">
            <div style={{ color: isDarkMode && "white" }} className="title">

               <h2>Task tracker</h2>

               <MaterialButton
                  type={isDarkMode ? "light_mode" : "dark_mode"}
                  functionName={() => { setDarkMode() }}>
               </MaterialButton>

               <MaterialButton
                  color={showAddTask ? "#FF1919" : "#18C318"}
                  type={showAddTask ? 'cancel' : 'add_circle'}
                  functionName={() => toggleAddTask(!showAddTask)}>
               </MaterialButton>
            </div>
            {showAddTask &&
               <CreateTask darkMode={isDarkMode} className="task-component"
               ></CreateTask>
            }
            {taskArray.length ?
               <TaskItem tasks={taskArray} darkMode={isDarkMode} ></TaskItem> : <div className="noTasks">
                  <h3>There are currently no tasks. Click on the 'Create' icon at the top right corner to create a task.</h3></div>
            }
         </div>

      </div>

   );
}

export default Task;
