import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "./requestStatuses/successStatus";
import { loadingStatus } from "./requestStatuses/loadingStatus";
import { errorStatus } from "./requestStatuses/errorStatus";

export const searchMoviesSlice = createSlice({
    name: "searchMovies",
    initialState: {
        movies: [],
        searchStatus: loadingStatus,
        searchResultsText: "",
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


export const searchMoviesReducer = searchMoviesSlice.reducer;
