import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "../constants/requestStatuses/successStatus";
import { loadingStatus } from "../constants/requestStatuses/loadingStatus";
import { errorStatus } from "../constants/requestStatuses/errorStatus";

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
        resetSearchMovies: () => {
            return {
                movies: [],
                searchStatus: loadingStatus,
            };
        },
    },
});

export const { searchMovies, searchMoviesSuccess, searchMoviesError, resetSearchMovies } = searchMoviesSlice.actions;

export const selectSearchMoviesState = (state) => state.searchMovies;
export const selectSearchMoviesStatus = (state) => selectSearchMoviesState(state).searchStatus;
export const selectSearchMovies = (state) => selectSearchMoviesState(state).movies;

export const searchMoviesReducer = searchMoviesSlice.reducer;
