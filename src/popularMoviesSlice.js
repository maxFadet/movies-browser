import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "./requestStatuses/successStatus";
import { loadingStatus } from "./requestStatuses/loadingStatus";
import { errorStatus } from "./requestStatuses/errorStatus";

export const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState: {
        popularMovies: { results: [] },
        popularMoviesFetchStatus: loadingStatus,
        currentPage: 1,
        totalPages: 500,
    },
    reducers: {
        fetchPopularMovies: (state, action) => {
            state.popularMoviesFetchStatus = loadingStatus;
            state.currentPage = action.payload.page || 1;
        },
        fetchPopularMovieSuccess: (state, { payload: { movies, totalPages } }) => {
            state.popularMovies.results = movies;
            state.totalPages = totalPages || state.totalPages;
            state.popularMoviesFetchStatus = successStatus;
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
export const selectCurrentPage = state => selectPopularMoviesState(state).currentPage;
export const selectTotalPages = state => selectPopularMoviesState(state).totalPages;

export const popularMoviesReducer = popularMoviesSlice.reducer;