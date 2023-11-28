import {createSlice} from "@reduxjs/toolkit";
import {fetchPopularMovies} from "./getPopularMoviesApi";
import {Movie} from "../../../types/types";
import {fetchAllMovies} from "../getMovies/getMoviesApi";

interface DataTypes {
    isLoading: boolean;
    populars: Movie;
}

const initialState:DataTypes = {
    isLoading: false,
    populars: {} as Movie
}

export const getPopularMoviesSlice = createSlice({
    name:"popularMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchPopularMovies.fulfilled, (state, {payload}) => {
                state.populars = payload
                state.isLoading = false
            })
            .addCase(fetchPopularMovies.rejected, () => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectPopularMovies = (state: { popularMovies: DataTypes; }) => state.popularMovies
export const getPopularMoviesReducer = getPopularMoviesSlice.reducer