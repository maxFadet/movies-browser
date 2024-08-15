import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "./requestStatuses/successStatus";
import { loadingStatus } from "./requestStatuses/loadingStatus";
import { errorStatus } from "./requestStatuses/errorStatus";

export const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        popularMovies: null,
        popularMoviesFetchStatus: loadingStatus,
    },
    reducers: {
        fetchPopularMovies: () => { },
        fetchPopularMovieSuccess: (state, { payload: popularMovies }) => {
            state.popularMovies = popularMovies;
            state.popularMoviesFetchStatus = successStatus
        },
        fetchPopularMoviesError: (state) => {
            state.popularMoviesFetchStatus = errorStatus;
        },
    }
});

export const { fetchPopularMovies, fetchPopularMovieSuccess, fetchPopularMoviesError } = popularMoviesSlice.actions;

export const selectPopularMoviesState = state => state.popularMovies;

export const selectPopularMoviesFetchStatust = state => selectPopularMoviesState(state).popularMoviesFetchStatus;
export const selectPopularMovies = state => selectPopularMoviesState(state).popularMovies;

export const popularMoviesReducer = popularMoviesSlice.reducer