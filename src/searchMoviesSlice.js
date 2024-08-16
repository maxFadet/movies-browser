import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "./requestStatuses/successStatus";
import { loadingStatus } from "./requestStatuses/loadingStatus";
import { errorStatus } from "./requestStatuses/errorStatus";

export const searchMoviesSlice = createSlice({
    name: "searchMovies",
    initialState: {
        movies: [],
        searchStatus: loadingStatus,
    },
    reducers: {
        searchMovies: (state, action) => {
            state.searchStatus = loadingStatus;
        },
        searchMoviesSuccess: (state, { payload: movies }) => {
            state.movies = movies;
            state.searchStatus = successStatus;
        },
        searchMoviesError: (state) => {
            state.searchStatus = errorStatus;
        },
    },
});

export const { searchMovies, searchMoviesSuccess, searchMoviesError } = searchMoviesSlice.actions;

export const selectSearchMoviesState = (state) => state.searchMovies;
export const selectSearchMoviesStatus = (state) => selectSearchMoviesState(state).searchStatus;
export const selectSearchMovies = (state) => selectSearchMoviesState(state).movies;

export const searchMoviesReducer = searchMoviesSlice.reducer;
