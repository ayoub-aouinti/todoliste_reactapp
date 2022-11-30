import './App.css';
import { AddTodo } from './components/AddTodo';
import MappedTodos from './components/MappedTodos';
import {useState} from 'react'
import {myContext} from './contexts/TodosContext';

function App() {
  const [todos, settodos] = useState([])
  return (
    <myContext.Provider value={{todos, settodos}}>
    <AddTodo/>
    <MappedTodos/>
    </myContext.Provider>
  );
}

export default App;
