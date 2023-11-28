import {createSlice} from "@reduxjs/toolkit";
import {fetchUpcomingMovies} from "./getUpcomingMoviesApi";
import {Movie} from "../../../types/types";
import {fetchTrendingMovies} from "../getTrendingMovies/getTrendingMoviesApi";

interface DataTypes {
    isLoading: boolean;
    upcoming: Movie
}

const initialState:DataTypes = {
    isLoading: false,
    upcoming: {} as Movie
}

export const getUpcomingMoviesSlice = createSlice({
    name:"upcomingMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, {payload}) => {
                state.upcoming = payload
                state.isLoading = false
            })
            .addCase(fetchUpcomingMovies.rejected, () => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectUpcomingMovies = (state: { upcomingMovies: DataTypes; }) => state.upcomingMovies
export const getUpcomingMoviesReducer = getUpcomingMoviesSlice.reducer