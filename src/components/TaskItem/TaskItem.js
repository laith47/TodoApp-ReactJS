import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask, editTask, toggleEditTask } from "../../redux/task";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { useState } from "react";

function TaskItem({ tasks, darkMode }) {
    const isDarkMode = darkMode;

    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    return (<TransitionGroup component="div" className="main-task-container">
        {tasks.map((task) => (
            <CSSTransition classNames="fade" timeout={300} key={task.id}>
                <div className="task"
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
                    <div className="icon-container">
                        <button style={{ color: "#18C318" }}
                            className="material-symbols-outlined"
                            onClick={() => dispatch(toggleTask(task.id))}
                        >
                            task_alt
                        </button>
                        <button style={{ color: "red" }}
                            className="material-symbols-outlined"
                            onClick={() => dispatch(removeTask(task.id))}
                        >
                            delete
                        </button>
                    </div>
                </div>
            </CSSTransition>
        ))}
    </TransitionGroup>)

}

export default TaskItem;
