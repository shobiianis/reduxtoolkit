import React from 'react'
import { useSelector } from 'react-redux'

const DisplayTodo = () => {
    const {todos}=useSelector((state)=>state.todo)
  return (
    <div>{todos.map((todo)=> ( <h1>{todo}</h1>)) }</div>
  ) 
}

export default DisplayTodo