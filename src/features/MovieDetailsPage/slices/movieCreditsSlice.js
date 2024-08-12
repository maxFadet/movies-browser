import { createSlice } from "@reduxjs/toolkit";

export const movieCredditsSlice = createSlice({
    name: "movieCredits",
    initialState: {
        movieCredits: [],
        fetchMovieCreditsStatus: "loading",
    },
    reducers: {
        fetchMovieCredits: () => { },
        fetchMovieCreditsSuccess: (state, { payload: movieCredits }) => {
            state.fetchMovieCreditsStatus = "success";
            state.movieCredits = movieCredits;
        },
        fetchMovieCreditsError: (state) => {
            state.fetchMovieCreditsStatus = "error";
        },
    }
});

export const {
    fetchMovieCredits,
    fetchMovieCreditsSuccess,
    fetchMovieCreditsError
} = movieCredditsSlice.actions;

export const selectMovieCreditsState = state => state.movieCredits;

export const selectMovieCreditsFetchStatus = state =>
    selectMovieCreditsState(state).fetchMovieCreditsStatus
export const selectMovieCreddits = state =>
    selectMovieCreditsState(state).movieCredits

export const selectMovieCast = state => selectMovieCreddits(state).cast;
export const selectMovieCrew = state => selectMovieCreddits(state).crew;

export const movieCreditsReducer = movieCredditsSlice.reducer;