import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../../redux/task";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItemContent from "../TaskItemContent/TaskItemContent";

function TaskItem({ tasks, darkMode }) {
    const isDarkMode = darkMode;

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
                    <TaskItemContent className="content" task={task} darkMode={darkMode}></TaskItemContent>
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
