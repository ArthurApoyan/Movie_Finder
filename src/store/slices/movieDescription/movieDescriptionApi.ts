import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieRequest} from "../../../api/functions/functions"
import {MOVIE_DETAILS_URL} from "../../../api/url/urls";

export const fetchMovieDescription = createAsyncThunk(
    "movieDescription/fetchMovieDescription",
        async function(id:string){
                const {movieRequestGet} = movieRequest()
                return await movieRequestGet(MOVIE_DETAILS_URL(id))
        }
)