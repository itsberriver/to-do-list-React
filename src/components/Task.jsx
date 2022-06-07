import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text, done }){
    return(
        <div className = {done ? 'task-component-container done' : 'task-component-container'}>
            <div className = 'task-text'>
                {text}
            </div>
            <div className = 'task-delete-icon'>
            <AiOutlineCloseCircle className='task-delete-icon' />
            </div>

        </div>
    );
}

export default Task;