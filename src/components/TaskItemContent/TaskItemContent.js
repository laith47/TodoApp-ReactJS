import React from 'react';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleEditTask } from "../../redux/task";

function TaskItemContent({ task, darkMode }) {
   const isDarkMode = darkMode;
   const [taskTitle, setTaskTitle] = useState('');
   const dispatch = useDispatch();

   return (
      <div className="content">
         {task.isEdit ? (
            <div style={{ backgroundColor: isDarkMode && "white" }} className="edit-container"
            >
               <input className="edit-input" autofocus="autofocus"
                  label="Task"
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder={task.taskTitle}
               ></input>
               <button class="material-symbols-outlined"
                  onClick={() => dispatch(editTask({ task, taskTitle }), dispatch(toggleEditTask(task)))}

                  className="save-button"
               >
                  Done
               </button>
               <button
                  onClick={() => dispatch(toggleEditTask(task))}
                  className="material-symbols-outlined"
               >
                  close</button>
            </div>
         ) : (
            <div>
               <p className="task-title" onDoubleClick={() => dispatch(toggleEditTask(task))}>{task.taskTitle}</p>

            </div>
         )}

         <span>{task.creationDate}</span>
      </div>
   )
};

TaskItemContent.propTypes = {};

TaskItemContent.defaultProps = {};

export default TaskItemContent;
