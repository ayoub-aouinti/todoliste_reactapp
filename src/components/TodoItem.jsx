import React, {useContext, useState} from 'react'
import { myContext } from '../contexts/TodosContext'

const TodoItem = (props) => {
  const { todos, settodos } = useContext(myContext)
  const [currentStyle, setcurrentStyle] =  useState("notBarredText")

  const deleteTodo = (indexOfTheCurrentItem) => {
    let todosCopy = todos.filter(ele => todos.indexOf(ele) !== indexOfTheCurrentItem)
    settodos (todosCopy)
  }

  const changeStyle = () => {
    if (currentStyle == "notBarredText") {
      setcurrentStyle('barredText')
    }
    else {setcurrentStyle('notBarredText')}
  }
  
  return (
    <div className='todo'>
        <h1 contentEditable="true" className={currentStyle}>{props.item.title}</h1>
        <button className='button' onClick={()=>deleteTodo(props.id)}>Delete</button>
        <button className='button' onClick={()=>changeStyle()}>Complete</button>
    </div>
  )
}

export default TodoItem