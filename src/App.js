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
  const { taskArray } = useSelector((state) => state.task);
  const [showAddTask, toggleAddTask] = useState(false);

  return (

    <body>
    <div className="main-container">
      <div className="inner-container">
        <div className="title">
          <h3>Task tracker</h3>
          <button variant="contained"
            onClick={() => toggleAddTask(!showAddTask)}
            className={showAddTask ? "close-button" : "add-button"}
          >
            {showAddTask ? 'Close' : 'Add'}
          </button>
        </div>

        {showAddTask && <AddTask className="task-component"
        ></AddTask>
        }
        <Task tasks={taskArray}  ></Task>
      </div>
    </div>
    </body>
  );
}

export default App;
