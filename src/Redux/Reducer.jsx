import {createReducer} from "@reduxjs/toolkit";
const initailstate  = {
    number:0,
}

export const createReducers =  createReducer(initailstate,
    {
        increment : (state)=>{
            state.number += 1
        },
        getData : (state , action)=>{
            state.number += 1;
            state.number += action.payload;
        },
        decrement : (state)=>{
            state.number -= 1
        },
    }
)
