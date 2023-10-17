import { set_todo } from '@/redux/reducer/todoSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const dispatch=useDispatch()
    const [text,setText]=useState('')
    const sendData=()=>{
        dispatch(set_todo(text))
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <button onClick={sendData}>add</button>
    </div>
  )
}

export default AddTodo