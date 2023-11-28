import {createAsyncThunk} from "@reduxjs/toolkit";
import {UPCOMING_MOVIE_URL} from "../../../api/url/urls";
import {movieRequest} from "../../../api/functions/functions";

export const fetchUpcomingMovies = createAsyncThunk(
    "upcomingMovies/fetchUpcomingMovies",
    async function(page:number){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(UPCOMING_MOVIE_URL + page)
    }
)