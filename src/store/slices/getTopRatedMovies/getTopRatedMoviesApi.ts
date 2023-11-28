import {createAsyncThunk} from "@reduxjs/toolkit";
import {TOP_RATED_MOVIE_URL} from "../../../api/url/urls";
import {movieRequest} from "../../../api/functions/functions";

export const fetchTopRatedMovies = createAsyncThunk(
    "topRatedMovies/fetchTopRatedMovies",
    async function(page:number){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(TOP_RATED_MOVIE_URL + page)
    }
)