import {createAsyncThunk} from "@reduxjs/toolkit";
import {POPULAR_MOVIE_URL, TOP_RATED_MOVIE_URL, TRENDING_MOVIES_URL, UPCOMING_MOVIE_URL} from "../../../api/url/urls";
import {movieRequest} from "../../../api/functions/functions";
import {Movie} from "../../../types/types";

export const fetchAllMovies = createAsyncThunk(
    "allMovies/fetchAllMovies",
    async function () {
        const {movieRequestGet} = movieRequest()
        const popularMovies:Movie = await movieRequestGet(POPULAR_MOVIE_URL + 1)
        const topRatedMovies:Movie = await movieRequestGet(TOP_RATED_MOVIE_URL + 1)
        const upcomingMovies:Movie = await movieRequestGet(UPCOMING_MOVIE_URL + 1)
        const trendingMovies:Movie = await movieRequestGet(TRENDING_MOVIES_URL + 1)

        return({
            popularMovies,
            topRatedMovies,
            upcomingMovies,
            trendingMovies
        })
    }
)