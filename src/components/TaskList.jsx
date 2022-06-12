import React, { useState} from 'react';
import '../stylesheets/TaskList.css';
import TaskForm from '../components/TaskForm.jsx';
import Task from '../components/Task.jsx';


function TaskList(){

    const [tasks, setTasks] = useState([]);

    return(
        <>
            <TaskForm />
            <div className = 'task-list-container'>
            {
                <TaskForm 
                text={task.text}
                done={task.done}
                />
            }

            </div>
        </>
    );
}

export default TaskList;