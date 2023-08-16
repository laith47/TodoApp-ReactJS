import './App.css';
import CreateTask from './components/CreateTask/CreateTask';
import { useState } from 'react';
import {
  useSelector
} from 'react-redux';
import TaskItem from './components/TaskItem/TaskItem';

function App() {
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
          <button className="material-symbols-outlined open"
            onClick={() => toggleAddTask(!showAddTask)}
            style={{ color: showAddTask ? "#FF1919" : "#18C318" }}
          >
            {showAddTask ? 'cancel' : 'add_circle'}
          </button>
        </div>
        {showAddTask &&
          <CreateTask darkMode={isDarkMode} className="task-component"
          ></CreateTask>
        }
        <TaskItem tasks={taskArray} darkMode={isDarkMode} ></TaskItem>
      </div>
    </div>

  );
}

export default App;
