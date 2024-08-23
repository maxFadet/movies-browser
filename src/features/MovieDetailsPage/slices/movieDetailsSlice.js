import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus } from "../../../common/constants/requestStatuses/loadingStatus";
import { errorStatus } from "../../../common/constants/requestStatuses/errorStatus";
import { successStatus } from "../../../common/constants/requestStatuses/successStatus";

export const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetails: null,
        fetchMovieDetailsStatus: loadingStatus,
    },
    reducers: {
        fetchMovieDetails: () => { },
        fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
            state.fetchMovieDetailsStatus = successStatus;
            state.movieDetails = movieDetails;
        },
        fetchMovieDetailsError: (state) => {
            state.fetchMovieDetailsStatus = errorStatus
        },
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError
} = movieDetailsSlice.actions;

export const selectMovieDetailsState = state => state.movieDetails;

export const selectFetchMovieDetailsStatus = state => 
    selectMovieDetailsState(state).fetchMovieDetailsStatus;
export const selectMovieDetails = state => 
    selectMovieDetailsState(state).movieDetails;

export const movieDetailsReducer = movieDetailsSlice.reducer;