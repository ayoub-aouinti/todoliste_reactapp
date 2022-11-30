import React, {useContext, useState} from 'react'
import { myContext } from '../contexts/TodosContext'

export const AddTodo = () => {
    const { todos, settodos } = useContext(myContext) 

    const [newTodo, setnewTodo] =  useState("")
    

    function addNewTodo () {
        settodos ([...todos,{"title": newTodo}])
    }
  return (
    <div>
        <input className='input' type="text" onChange={(e)=> setnewTodo(e.target.value)}/>
        <button className='button' onClick={addNewTodo}>add todo</button>
    </div>
  )
}
