import React, { useState} from 'react';
import '../stylesheets/TaskList.css';
import TaskForm from '../components/TaskForm.jsx';
import Task from './Task.jsx';



function TaskList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task =>{
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task,... tasks];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
            <TaskForm onSubmit = {addTask} />
            <div className = 'task-list-container'>
            {
                tasks.map((task) =>
                <TaskForm 
                    text={task.text}
                    done={task.done}
                />

            )}

            </div>
        </>
    );
}

export default TaskList;