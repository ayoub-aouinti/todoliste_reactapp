import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { myContext } from '../contexts/TodosContext'



const MappedTodos = () => {
  const { todos } = useContext(myContext) 
  
  return (
    <div>
      {
        todos.map((todo, index) => (
            <TodoItem item={todo} id={index} key={index}/>
        ))
      }
    </div>
  )
}

export default MappedTodos