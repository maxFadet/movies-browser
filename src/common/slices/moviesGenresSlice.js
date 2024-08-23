import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus } from "../constants/requestStatuses/loadingStatus";
import { successStatus } from "../constants/requestStatuses/successStatus";
import { errorStatus } from "../constants/requestStatuses/errorStatus";

export const moviesGenresSlice = createSlice({
    name: "moviesGenres",
    initialState: {
        moviesGenres: null,
        moviesGenresFetchStatus: loadingStatus,
    },
    reducers: {
        fetchMoviesGenres: () => { },
        fetchMoviesGenresSuccess: (state, { payload: moviesGenres }) => {
            state.moviesGenres = moviesGenres;
            state.moviesGenresFetchStatus = successStatus;
        },
        fetchMoviesGenresError: (state) => {
            state.moviesGenresFetchStatus = errorStatus;
        },
    },
});

export const { fetchMoviesGenres, fetchMoviesGenresSuccess, fetchMoviesGenresError } = moviesGenresSlice.actions;

export const selectMoviesGenresState = state => state.moviesGenres;

export const selectMoviesGenresFetchStatus = state => selectMoviesGenresState(state).moviesGenresFetchStatus;
export const selectMoviesGenres = state => selectMoviesGenresState(state).moviesGenres;
export const findMoviesGenresById = (state, genresIds) => {
    if (!genresIds) {
        return [];
    }

    const { genres } = selectMoviesGenres(state);
    const foundNames = genres.filter(({ id }) => genresIds.includes(id));

    return foundNames;
};
export const moviesGenresReducer = moviesGenresSlice.reducer;