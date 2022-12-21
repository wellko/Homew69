import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../axios-api";
import {responseMovie} from "../types";

export  const fetchMovie = createAsyncThunk<responseMovie, string>(
    'movie/fetchSearchOneMovie',
    async (arg) =>{
        const MovieResponse = await AxiosApi.get<responseMovie>('shows/'  + arg);
        return MovieResponse.data
    }
)