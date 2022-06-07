import React from 'react';
import './stylesheets/Task.css';

function Task({ text }){
    return(
        <div className = 'task-component-container'>
            <div className = 'task-text'>
                {text}
            </div>
            <div className = 'task-delete-icon'>
                delete
            </div>

        </div>
    );
}

export default Task;