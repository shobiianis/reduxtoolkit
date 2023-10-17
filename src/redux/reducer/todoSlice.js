const { createSlice } = require("@reduxjs/toolkit");


const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        set_todo:(state,action)=>{
          console.log(action)
            state.todos.push(action.payload)
        }
    }
})

export const {set_todo}=todoSlice.actions
export default todoSlice.reducer