import { createSlice } from "@reduxjs/toolkit";

export const moviesDetailsListSlice = createSlice({
    name: "moviesDetailsList",
    initialState: {
        moviesDetailsList: null,
        fetchMoviesDetailsListStatus: "loading",
    },
    reducers: {
        fetchMoviesDetailsList: () => { },
        fetchMoviesDetailsListSuccess: (state, { payload: moviesDetailsList }) => {
            state.fetchMoviesDetailsListStatus = "success";
            state.moviesDetailsList = moviesDetailsList;
        },
        fetchMoviesDetailsListError: (state) => { state.fetchMoviesDetailsListStatus = "error" },
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