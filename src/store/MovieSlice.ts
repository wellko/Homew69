import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {responseMovie} from "../types";
import {fetchMovie} from "./MovieThunks";

interface StateMovie {
	oneMovie: responseMovie,
	loading: boolean,
}

const initialState: StateMovie = {
	oneMovie: {
		id: '',
		name: '',
		genres: [],
		language: '',
		summary: '',
		image: {medium: ''},
	}
	,
	loading: true
}

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovie.pending, (state) => {
			state.loading = true;
		})
		builder.addCase(fetchMovie.fulfilled, (state, action) => {
			state.oneMovie = action.payload;
			state.loading = false;
		})
		builder.addCase(fetchMovie.rejected, (state) => {
			state.loading = false;
			alert('Smth goes wrong');
		})
	}
})

export const movieReducer = movieSlice.reducer;

export const selectMovie = (state: RootState) => state.oneMovie;