import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {fetchMovies} from "./MoviesThunks";
import {responseApiItem} from "../types";

interface State {
    movie: responseApiItem[];
    loading: boolean;
}

const initialState:State = {
    movie: [],
    loading: false,
}

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movie = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchMovies.rejected, (state) => {
            state.loading = false;
            alert('Smth goes wrong');
        })
    }
})

export const moviesReducer = moviesSlice.reducer;

export const selectMovies = (state: RootState) => state.movie;