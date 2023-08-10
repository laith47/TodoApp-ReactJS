import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask, editTask, toggleEditTask } from "../../redux/task";
// import TextField from "@mui/material/TextField";

import { useState } from "react";

function Task({ tasks }) {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();
    return tasks.map((task) => (
        <div
            key={task.id}
            className={task.isDone ? "task-done" : "task"}
        >
            <div className="content">
                {task.isEdit ? (
                    <div className="edit-input">
                        <input
                            className="input"
                            id="outlined-basic"
                            label="Task"
                            variant="outlined"
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
                <span
                    className="material-symbols-outlined"
                    onClick={() => dispatch(toggleTask(task.id))}
                >
                    Done
                </span>
                <span
                    className="material-symbols-outlined"
                    onClick={() => dispatch(removeTask(task.id))}
                >
                    close
                </span>
            </div>
        </div>
    ));
}

export default Task;
