import {createAsyncThunk} from "@reduxjs/toolkit";
import AxiosApi from "../axios-api";

export  const fetchMovies = createAsyncThunk<void, string>(
	'movies/fetchAll',
	async (searching) =>{
		const MovieResponse = await AxiosApi.get('searching')
		return MovieResponse.data
	}
)