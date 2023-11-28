import {createSlice} from "@reduxjs/toolkit";
import {fetchTopRatedMovies} from "./getTopRatedMoviesApi";
import {Movie} from "../../../types/types";
import {fetchPopularMovies} from "../getPopularMovies/getPopularMoviesApi";

interface DataTypes {
    isLoading: boolean;
    topRated: Movie;
}

const initialState:DataTypes = {
    isLoading: false,
    topRated: {} as Movie
}

export const getTopRatedMoviesSlice = createSlice({
    name:"topRatedMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRatedMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchTopRatedMovies.fulfilled, (state, {payload}) => {
                state.topRated = payload
                state.isLoading = false
            })
            .addCase(fetchTopRatedMovies.rejected, () => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectTopRatedMovies = (state: { topRatedMovies: DataTypes; }) => state.topRatedMovies
export const getTopRatedMoviesReducer = getTopRatedMoviesSlice.reducer