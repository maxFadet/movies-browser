import { createSlice } from "@reduxjs/toolkit";

export const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        details: [],
        fetchStatus: "loading",
    },
    reducers: {
        fetchMovieDetailsApi: () => { },
        fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
            state.fetchStatus = "success";
            state.details = movieDetails;
        },
        fetchMovieDetailsError: (state) => { state.fetchStatus = "error" },
    },
});

export const {
    fetchMovieDetailsApi,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;

export const selectDetails = state => selectMovieDetailsState(state).details;
export const selectFetchStatus = state => selectMovieDetailsState(state).fetchStatus;
export const selectGenres = state => selectDetails(state).genres;

export const movieDetailsReducer = movieDetailsSlice.reducer;