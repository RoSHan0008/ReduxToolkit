import { configureStore } from "@reduxjs/toolkit";
import { createReducers } from "./Reducer";

const store = configureStore({
    reducer:{ 
        custom: createReducers
    }
}) 
export default store
