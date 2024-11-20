import './App.css';
import AddTask from './Sample/AddTask';
import DisplayTodo from './Sample/DisplayTodo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <AddTask />
      <DisplayTodo />
      <ToastContainer/>
    </div>
  );
}

export default App;
