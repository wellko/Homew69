import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../axios-api";
import {responseApiItem} from "../types";

export  const fetchMovie = createAsyncThunk<responseApiItem[], string>(
    'movie/fetchSearchOneMovie',
    async (arg) =>{
        const MovieResponse = await AxiosApi.get<responseApiItem[]>('show/'  + arg);
        return MovieResponse.data
    }
)