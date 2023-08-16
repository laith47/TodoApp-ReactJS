import React from 'react';
import './CreateTask.css'
import {
   useDispatch,
} from 'react-redux';
import { useState } from 'react';
import { postTask } from '../../redux/task';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { toastr } from 'react-redux-toastr'



function CreateTask({ darkMode }) {

   const isDarkMode = darkMode;
   const [taskTitle, setTaskTitle] = useState();
   const [creationDate] = useState(new Date().toISOString().substring(0, 10));
   const [isDone] = useState(false);

   const dispatch = useDispatch();

   const toastrSettings = {
      timeOut: 2000,
      position: 'top-right',
      closeButton: true,
      progressBar: true,
      newestOnTop: false,
      preventDuplicates: false,
      showDuration: '300',
      hideDuration: '1000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
      color: 'orange'
   };
   const CreateTaskHandler = (e) => {
      const newTaskObject = {
         id: crypto.randomUUID(),
         taskTitle: taskTitle,
         creationDate: creationDate,
         isDone: isDone
      };
      e.preventDefault();
      if (!newTaskObject.taskTitle) {
         toastr.error('Task title cannot be empty', toastrSettings);
         return;
      }
      try {
         const result = dispatch(postTask(newTaskObject));
         if (result) {
            toastr.success('Task Created', 'Success', toastrSettings)
            const form = document.getElementById('create-task');
            form.reset();
         } else {
            toastr.error('Task Was Not Created', "Fail", toastrSettings);

         }
      }
      catch (error) {
         toastr.error('Error', "error.message", toastrSettings);
      }

   }
   return (
      <div>
         <form
            onSubmit={CreateTaskHandler}
            id="create-task"
            style={{ backgroundColor: isDarkMode ? '#205295' : 'white' }}
            className="task-form"
         >
            <div className="task-container">
               <input required className="input"
                  onChange={(e) => {
                     setTaskTitle(e.target.value)
                  }}>
               </input>
               <button className='create-button'
               >Create Task </button>
            </div>
         </form>
      </div>
   )
}

CreateTask.propTypes = {};

CreateTask.defaultProps = {};

export default CreateTask;
