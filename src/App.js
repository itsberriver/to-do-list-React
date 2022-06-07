import './App.css';
import Task from './components/Task.jsx';
import TaskForm from './components/TaskForm.jsx';

function App() {
  return (
    <div className="App">
      <div className='task-container'>
        <h1>My To Do List</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
