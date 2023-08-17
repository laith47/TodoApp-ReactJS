import React from 'react';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleEditTask } from "../../redux/task";
import MaterialButton from '../MaterialButton/MaterialButton';

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
               <MaterialButton type={"Done"} functionName={() => dispatch(editTask({ task, taskTitle }), dispatch(toggleEditTask(task)))}></MaterialButton>
               <MaterialButton type={"close"} functionName={() => dispatch(toggleEditTask(task))}></MaterialButton>
            </div>
         ) : (
            <p className="task-title" onDoubleClick={() => dispatch(toggleEditTask(task))}>{task.taskTitle}</p>
         )}
         <span>{task.creationDate}</span>
      </div>
   )
};

TaskItemContent.propTypes = {};

TaskItemContent.defaultProps = {};

export default TaskItemContent;
