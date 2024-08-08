import { createSlice } from "@reduxjs/toolkit";

export const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        details: [],
        fetchStatus: "loading",
    },
    reducers: {
        fetchMovieDetailsApi: () => { },
        fetchMovieDetailsSuccess: (state) => { state.fetchStatus = "success" },
        fetchMovieDetailsError: (state) => { state.fetchStatus = "error" },
    },
});

export const { fetchMovieDetailsApi } = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;
export const selectDetails = state => selectMovieDetailsState(state).details;
export const selectFetchStatus = state => selectMovieDetailsState(state).fetchStatus;

export const movieDetailsReducer = movieDetailsSlice.reducer;