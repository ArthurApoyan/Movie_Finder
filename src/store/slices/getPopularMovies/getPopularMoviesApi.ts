import {createAsyncThunk} from "@reduxjs/toolkit";
import {POPULAR_MOVIE_URL} from "../../../api/url/urls";
import {movieRequest} from "../../../api/functions/functions";

export const fetchPopularMovies = createAsyncThunk(
    "popularMovies/fetchPopularMovies",
    async function(page:number){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(POPULAR_MOVIE_URL + page)
    }
)