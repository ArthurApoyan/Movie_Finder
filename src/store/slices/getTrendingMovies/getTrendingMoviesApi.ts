import {createAsyncThunk} from "@reduxjs/toolkit";
import {TRENDING_MOVIES_URL} from "../../../api/url/urls";
import {movieRequest} from "../../../api/functions/functions";

export const fetchTrendingMovies = createAsyncThunk(
    "trendingMovies/fetchTrendingMovies",
    async function(page:number){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(TRENDING_MOVIES_URL + page)
    }
)