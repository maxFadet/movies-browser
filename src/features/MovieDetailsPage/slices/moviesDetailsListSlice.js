import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus } from "../../../requestStatuses/loadingStatus";
import { errorStatus } from "../../../requestStatuses/errorStatus";
import { successStatus } from "../../../requestStatuses/successStatus";

export const moviesDetailsListSlice = createSlice({
    name: "moviesDetailsList",
    initialState: {
        moviesDetailsList: null,
        fetchMoviesDetailsListStatus: loadingStatus,
    },
    reducers: {
        fetchMoviesDetailsList: () => { },
        fetchMoviesDetailsListSuccess: (state, { payload: moviesDetailsList }) => {
            state.fetchMoviesDetailsListStatus = successStatus;
            state.moviesDetailsList = moviesDetailsList;
        },
        fetchMoviesDetailsListError: (state) => { state.fetchMoviesDetailsListStatus = errorStatus },
    },
});

export const {
    fetchMoviesDetailsList,
    fetchMoviesDetailsListSuccess,
    fetchMoviesDetailsListError
} = moviesDetailsListSlice.actions;

export const selectMoviesDetailsListState = state => state.moviesDetailsList;

export const selectFetchMoviesDetailsListStatus = state => selectMoviesDetailsListState(state).fetchMoviesDetailsListStatus;
export const selectMoviesDetailsList = state => selectMoviesDetailsListState(state).moviesDetailsList;
export const selectMovieDetailsById = (state, movieId) => {
    const movieIdAsNumber = Number(movieId);
    const foundByIdMovieDetails = selectMoviesDetailsList(state).find(({ id }) => id === movieIdAsNumber);
    return foundByIdMovieDetails;
};

export const moviesDetailsListReducer = moviesDetailsListSlice.reducer;