import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus } from "../../../requestStatuses/loadingStatus";
import { errorStatus } from "../../../requestStatuses/errorStatus";
import { successStatus } from "../../../requestStatuses/successStatus";

export const moviesCredditsListSlice = createSlice({
    name: "moviesCreditsList",
    initialState: {
        moviesCreditsList: [],
        fetchMoviesCreditsListStatus: loadingStatus,
    },
    reducers: {
        fetchMoviesCreditsList: () => { },
        fetchMoviesCreditsListSuccess: (state, { payload: moviesCreditsList }) => {
            state.fetchMoviesCreditsListStatus = successStatus;
            state.moviesCreditsList = moviesCreditsList;
        },
        fetchMoviesCreditsListError: (state) => {
            state.fetchMoviesCreditsListStatus = errorStatus;
        },
    }
});

export const {
    fetchMoviesCreditsList,
    fetchMoviesCreditsListSuccess,
    fetchMoviesCreditsListError
} = moviesCredditsListSlice.actions;

export const selectMoviesCreditsListState = state => state.moviesCreditsList;

export const selectMoviesCreditsListFetchStatus = state =>
    selectMoviesCreditsListState(state).fetchMoviesCreditsListStatus
export const selectMovieCreddits = state => selectMoviesCreditsListState(state).moviesCreditsList

export const selectCreditsById = (state, movieId) => {
    const movieIdAsNumber = Number(movieId);
    const creditsFoundById = selectMovieCreddits(state).find(({ id }) => id === movieIdAsNumber);
    return creditsFoundById;
};

export const selectMovieCast = state => selectMovieCreddits(state).cast;
export const selectMovieCrew = state => selectMovieCreddits(state).crew;

export const moviesCreditsListReducer = moviesCredditsListSlice.reducer;