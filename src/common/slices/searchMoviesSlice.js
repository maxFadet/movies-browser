import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../constants/requestStatuses";

export const searchMoviesSlice = createSlice({
    name: "searchMovies",
    initialState: {
        movies: [],
        searchStatus: loadingStatus,
        searchResultsText: "",
        totalResults: 0,
        totalPages:0,
    },
    reducers: {
        searchMovies: (state) => {
            state.searchStatus = loadingStatus;
        },
        searchMoviesSuccess: (state, { payload: { movies, totalResults, totalPages } }) => {
            state.movies = movies;
            state.totalResults = totalResults;
            state.totalPages = totalPages;
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
                totalPages:0,
            };
        },
        setSearchResultsText: (state, action) => {
            state.searchResultsText = action.payload;
        },
    },
});

export const { searchMovies, searchMoviesSuccess, searchMoviesError, resetSearchMovies, setSearchResultsText } = searchMoviesSlice.actions;

export const selectSearchMoviesState = (state) => state.searchMovies;
export const selectSearchMoviesStatus = (state) => selectSearchMoviesState(state).searchStatus;
export const selectSearchMovies = (state) => selectSearchMoviesState(state).movies;
export const selectSearchResultsText = (state) => state.searchMovies.searchResultsText;
export const selectTotalResults = (state) => selectSearchMoviesState(state).totalResults;
export const selectTotalPages = (state) => selectSearchMoviesState(state).totalPages;


export const searchMoviesReducer = searchMoviesSlice.reducer;
