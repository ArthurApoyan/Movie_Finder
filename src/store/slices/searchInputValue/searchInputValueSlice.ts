import {createSlice} from "@reduxjs/toolkit";

const initialState:string = "";

export const searchInputValueSlice = createSlice({
    name:"searchInputValue",
    initialState,
    reducers:{
        getInputValue(state, {payload}){
            return payload
        },
        resetInputValue(){
            return ""
        }
    }
})

export const selectSearchInputValue = (state: { searchInputValue: string; }) => state.searchInputValue
export const {getInputValue, resetInputValue} = searchInputValueSlice.actions
export const searchInputValueReducer = searchInputValueSlice.reducer