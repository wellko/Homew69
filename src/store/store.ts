import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./MoviesSlice";
import {movieReducer} from "./MovieSlice";

export const store = configureStore({
	reducer: {
		movie:moviesReducer,
		oneMovie: movieReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;