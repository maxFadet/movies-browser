import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../constants/requestStatuses";

export const searchMoviesSlice = createSlice({
    name: "searchMovies",
    initialState: {
        movies: [],
        searchStatus: loadingStatus,
        searchResultsText: "",
        totalResults: 0,
        totalPages: 0,
        currentPage: 1,
    },
    reducers: {
        searchMovies: (state) => {
            state.searchStatus = loadingStatus;
        },
        searchMoviesSuccess: (state, { payload: { movies, totalResults, totalPages } }) => {
            state.movies = movies;
            state.totalResults = totalResults;
            state.totalPages = totalPages;
            state.currentPage = currentPage;
            state.searchStatus = successStatus;
        },
        searchMoviesError: (state) => {
            state.searchStatus = errorStatus;
        },
        resetSearchMovies: () => {
            return {
                movies: [],
                searchStatus: loadingStatus,
                searchResultsText: "",
                totalResults: 0,
                totalPages: 0,
                currentPage: 1,
            };
        },
        setSearchResultsText: (state, action) => {
            state.searchResultsText = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { searchMovies, searchMoviesSuccess, searchMoviesError, resetSearchMovies, setSearchResultsText, setCurrentPage } = searchMoviesSlice.actions;

export const selectSearchMoviesState = (state) => state.searchMovies;
export const selectSearchMoviesStatus = (state) => selectSearchMoviesState(state).searchStatus;
export const selectSearchMovies = (state) => selectSearchMoviesState(state).movies;
export const selectSearchResultsText = (state) => state.searchMovies.searchResultsText;
export const selectTotalResults = (state) => selectSearchMoviesState(state).totalResults;
export const selectTotalPages = (state) => selectSearchMoviesState(state).totalPages;
export const selectCurrentPage = (state) => selectSearchMoviesState(state).currentPage;

export const searchMoviesReducer = searchMoviesSlice.reducer;
