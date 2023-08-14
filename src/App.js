import './App.css';
import Task from './components/TaskItem/TaskItem';
import AddTask from './components/AddTask/AddTask';
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

    <body >
      <div className="main-container">
        <div style={{ backgroundColor: isDarkMode ? '#0A2647' : 'white' }} className="inner-container">
          <div style={{ color: isDarkMode && "white" }} className="title">
            <h3>Task tracker</h3>
            <button onClick={() => { setDarkMode() }}
              className="material-symbols-outlined"
            >
              {isDarkMode ? "light_mode" : "dark_mode"}
            </button>

            <button variant="contained"
              className='add-task-button'
              onClick={() => toggleAddTask(!showAddTask)}
              style={{ backgroundColor: showAddTask ? "red" : "#18C318" }}
            >
              {showAddTask ? 'Close' : 'Add'}
            </button>
          </div>
          {showAddTask && <AddTask darkMode={isDarkMode} className="task-component"
          ></AddTask>
          }
          <Task tasks={taskArray} darkMode={isDarkMode} ></Task>
        </div>
      </div>
    </body>
  );
}

export default App;
