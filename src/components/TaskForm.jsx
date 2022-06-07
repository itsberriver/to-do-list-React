import React from 'react';
import '../stylesheets/TaskForm.css';

function TaskForm(props){
    return(
        <form className='task-form'>
            <input 
                className='task-input'
                type='text'
                placeholder='add a task'
                name='text'

        />
        <button className='task-button'>
            add a task
        </button>
        </form>
    );
}

export default TaskForm;