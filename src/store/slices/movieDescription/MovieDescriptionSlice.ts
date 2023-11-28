import {createSlice} from "@reduxjs/toolkit";
import {fetchMovieDescription} from "./movieDescriptionApi";
import {Description} from "../../../types/types";

const initialState:Description = {} as Description;

export const movieDescriptionSlice = createSlice({
    name: "movieDescription",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDescription.fulfilled, (state, {payload}) => {
                return payload
            })
            .addCase(fetchMovieDescription.rejected, (state, {payload}) => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectMovieDescription = (state: { movieDescription: Description; }) => state.movieDescription
export const movieDescriptionReducer = movieDescriptionSlice.reducer