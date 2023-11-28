import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieRequest} from "../../../api/functions/functions";


export const fetchSearchResult = createAsyncThunk(
    "searchResult/fetchSearchResult",
    async function(url:string){
        const {movieRequestGet} = movieRequest()
        return await movieRequestGet(url)
    }
)