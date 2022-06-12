import './App.css';
import TaskList from './components/TaskList.jsx';

function App() {
  return (
    <div className="App">
      <div className='task-container'>
        <h1>My To Do List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
