import {createSlice} from "@reduxjs/toolkit";
import {fetchSearchResult} from "./searchResultApi";
import {SearchResult} from "../../../types/types";

const initialState:SearchResult = {} as SearchResult;

export const searchResultSlice = createSlice({
    name:"searchResult",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResult.fulfilled, (state, {payload}) => {
                return payload
            })
            .addCase(fetchSearchResult.rejected, (state, {payload}) => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectSearchResult = (state: { searchResult: SearchResult; }) => state.searchResult
export const searchResultReducer = searchResultSlice.reducer