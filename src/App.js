import './App.css';
import Task from './components/TaskItem/TaskItem';
import CreateTask from './components/CreateTask/CreateTask';
import { useState } from 'react';
import {
  useSelector
} from 'react-redux';

function App() {
  // const taskArray = [
  //   {id:1, taskTitle: 'finish tasks project', creationDate: new Date().toISOString().substring(0, 10),isDone:true },
  //   {id:2, taskTitle: 'complete the react course', creationDate: new Date().toISOString().substring(0, 10),isDone:false },
  //   {id:3, taskTitle: 'create a new project', creationDate: new Date().toISOString().substring(0, 10),isDone:false }
  // ];



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

  return (


    <div className="main-container">
      <div style={{ backgroundColor: isDarkMode ? '#0A2647' : 'white' }} className="inner-container">
        <div style={{ color: isDarkMode && "white" }} className="title">
          <h2>Task tracker</h2>
          <button onClick={() => { setDarkMode() }}
            className="material-symbols-outlined"
          >
            {isDarkMode ? "light_mode" : "dark_mode"}
          </button>

          {/* <button variant="contained"
              className='add-task-button'
              onClick={() => toggleAddTask(!showAddTask)}
              style={{ backgroundColor: showAddTask ? "#FF1919" : "#18C318" }}
            >
              {showAddTask ? 'Close' : 'Add'}
            </button> */}
          <button className="material-symbols-outlined open"
              // className='add-task-button'
            onClick={() => toggleAddTask(!showAddTask)}
            style={{ color: showAddTask ? "#FF1919" : "#18C318" }}
          >
            {showAddTask ? 'cancel' : 'add_circle'}
          </button>


        </div>
        {showAddTask && <CreateTask darkMode={isDarkMode} className="task-component"
        ></CreateTask>
        }
        <Task tasks={taskArray} darkMode={isDarkMode} ></Task>
      </div>
    </div>

  );
}

export default App;
