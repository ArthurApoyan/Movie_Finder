import {createSlice} from "@reduxjs/toolkit";
import {fetchAllMovies} from "./getMoviesApi";
import {Movie} from "../../../types/types";
import {RootState} from "../../store";

interface MovieCategory {
    popular: Movie;
    topRated: Movie;
    upcoming: Movie;
    trending: Movie;
}

interface DataTypes {
    isLoading: boolean;
    movies: MovieCategory;
}

const initialState: DataTypes = {
    isLoading: false,
    movies: {
        popular: {} as Movie,
        topRated: {} as Movie,
        upcoming: {} as Movie,
        trending: {} as Movie
    }
}

export const getMoviesSlice = createSlice({
    name: "allMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchAllMovies.fulfilled, (state, {payload}) => {
                state.movies.popular = payload.popularMovies
                state.movies.topRated = payload.topRatedMovies
                state.movies.upcoming = payload.upcomingMovies
                state.movies.trending = payload.trendingMovies
                state.isLoading = false
            })
            .addCase(fetchAllMovies.rejected, () => {
                alert("Something goes wrong!!!")
            })
    }
})

export const selectAllMovies = (state: { allMovies: DataTypes; }) => state.allMovies
export const {} = getMoviesSlice.actions
export const getAllMoviesReducer = getMoviesSlice.reducer