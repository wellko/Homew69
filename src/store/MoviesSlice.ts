import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fetchMovies} from "./MoviesThunks";
import {responseApiItem} from "../types";

interface State {
    movie: responseApiItem[]
}

const initialState:State = {
    movie: []
}

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movie = action.payload;
        })
    }
})

export const moviesReducer = moviesSlice.reducer;

export const selectMovies = (state: RootState) => state.movie.movie;