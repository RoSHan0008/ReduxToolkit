
import {createSlice, nanoid} from "@reduxjs/toolkit"

 export const initialState ={
    todos : [],
}

export const tosoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
       addTodo : {
            id : nanoid(),
            text: action.payload,
       }
    }
})
