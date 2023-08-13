import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask, editTask, toggleEditTask } from "../../redux/task";

import { useState } from "react";

function Task({ tasks, darkMode }) {
    const isDarkMode = darkMode;
    //TODO:change save function to become a form
    // const handleEditSubmit=(task,taskTitle,e)=>{
    //     e.preventDefault();
    //     dispatch(editTask({ task, taskTitle }))
    // }

    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();
    return tasks.map((task) => (
        <div key={task.id}
            className="task"
            style={{
                backgroundColor: isDarkMode ? '#205295' : 'white',
                color: isDarkMode && "white",
                borderLeft: task.isDone && "5px solid rgb(24, 195, 24)",
            }}
        >
            <div className="content">
                {task.isEdit ? (
                    <div style={{ backgroundColor: isDarkMode && "white" }} className="edit-container"
                    >
                        <input className="edit-input" autofocus="autofocus"
                            label="Task"
                            onChange={(e) => setTaskTitle(e.target.value)}
                        ></input>
                        <button
                            onClick={() => dispatch(editTask({ task, taskTitle }), dispatch(toggleEditTask(task)))}

                            className="save-button"
                        >
                            save
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="task-title" onDoubleClick={() => dispatch(toggleEditTask(task))}>{task.taskTitle}</p>

                    </div>
                )}

                <span>{task.creationDate}</span>
            </div>
            <div className="icon-container">
                <button
                    className="material-symbols-outlined"
                    onClick={() => dispatch(toggleTask(task.id))}
                >
                    Done
                </button>
                <button
                    className="material-symbols-outlined"
                    onClick={() => dispatch(removeTask(task.id))}
                >
                    close
                </button>
            </div>
        </div>
    ));
}

export default Task;
