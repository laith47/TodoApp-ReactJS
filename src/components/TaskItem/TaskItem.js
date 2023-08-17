import "./TaskItem.css";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../../redux/task";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TaskItemContent from "../TaskItemContent/TaskItemContent";
import MaterialButton from "../MaterialButton/MaterialButton";

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
                        <MaterialButton
                            type={"task_alt"}
                            color={"#18C318"}
                            functionName={() => dispatch(toggleTask(task.id))}>
                        </MaterialButton>
                        <MaterialButton
                            type={"delete"}
                            color={"red"}
                            functionName={() => dispatch(removeTask(task.id))}>
                        </MaterialButton>
                    </div>
                </div>
            </CSSTransition>
        ))}
    </TransitionGroup>)

}

export default TaskItem;
