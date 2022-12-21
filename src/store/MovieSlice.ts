import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fetchMovies} from "./MovieThunks";

const initialState = {
}

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers:{},
	extraReducers:(builder) => {
builder.addCase(fetchMovies.fulfilled, (state, action))
	}
})

export const movieReducer = movieSlice.reducer;

export const selectMovies = (state: RootState) => state.movie;