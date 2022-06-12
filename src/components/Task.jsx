import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text, done, id ,deleteTask , taskIsDone }){
    return(
        <div className = {done ? 'task-component-container done' : 'task-component-container'}>
            <div 
                className = 'task-text'
                onClick= {() => taskIsDone(id) } >
                {text}
            </div>
            <div 
                className = 'task-delete-icon'
                onClick= {() => deleteTask(id) } >
            <AiOutlineCloseCircle className='task-delete-icon' />
            </div>

        </div>
    );
}

export default Task;