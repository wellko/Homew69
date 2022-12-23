import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../axios-api";
import {responseApiItem} from "../types";

export const fetchMovies = createAsyncThunk<responseApiItem[], string>(
	'movies/fetchSearch',
	async (arg) => {
		const MovieResponse = await AxiosApi.get<responseApiItem[]>('search/shows?q=' + arg);
		return MovieResponse.data
	}
)