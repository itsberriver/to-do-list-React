import React from 'react';
import '../stylesheets/TaskForm.css';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props){

        const [inputText, setInputText] = useState('');
 
        const manageChange = e =>{
            setInputText(e.target.value);
        }

        const manageSubmit = e =>{

            e.preventDefault(); 
            const newTask = {
                id: uuidv4(),
                text: inputText,
                done: false, 
            }
            props.onSubmit(newTask);
        }

 
    return(
        <form 
        className='task-form'
        onSubmit = {manageSubmit}>
            <input 
                className='task-input'
                type='text'
                placeholder='add a task'
                name='text'
                onChange = {manageChange}

        />
        <button className='task-button'>
            add a task
        </button>
        </form>
    );
}

export default TaskForm;