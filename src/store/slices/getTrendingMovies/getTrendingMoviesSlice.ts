import {createSlice} from "@reduxjs/toolkit";
import {fetchTrendingMovies} from "./getTrendingMoviesApi";
import {Movie} from "../../../types/types";
import {fetchPopularMovies} from "../getPopularMovies/getPopularMoviesApi";

interface DataTypes {
    isLoading: boolean;
    trending: Movie;
}

const initialState:DataTypes = {
    isLoading: false,
    trending: {} as Movie
}

export const getTrendingMoviesSlice = createSlice({
    name:"trendingMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchTrendingMovies.fulfilled, (state, {payload}) => {
                state.trending = payload
                state.isLoading = false
            })
            .addCase(fetchTrendingMovies.rejected, () => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectTrendingMovies = (state: { trendingMovies: DataTypes; }) => state.trendingMovies
export const getTrendingMoviesReducer = getTrendingMoviesSlice.reducer