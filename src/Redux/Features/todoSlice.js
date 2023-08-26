
import { createSlice,nanoid } from "@reduxjs/toolkit"

const initialState ={
    todos : [],
}
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
       addTodo :(state ,action) =>{
            const todo={
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
       },
       removedTodo : ()=>{
        state.todos= state.todos.filter((todo)=>{

        })
       }
    }

})
export const {addTodo , removedTodo } = todoSlice.actions
export default todoSlice.reducer
