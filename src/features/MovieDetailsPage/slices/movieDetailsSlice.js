import { createSlice } from "@reduxjs/toolkit";

export const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movieDetails: [],
        fetchMovieDetailsStatus: "loading",
    },
    reducers: {
        fetchMovieDetailsApi: () => { },
        fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
            state.fetchMovieDetailsStatus = "success";
            state.movieDetails = movieDetails;
        },
        fetchMovieDetailsError: (state) => { state.fetchMovieDetailsStatus = "error" },
    },
});

export const {
    fetchMovieDetailsApi,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError
} = movieDetailsSlice.actions;

const selectMovieDetailsState = state => state.movieDetails;

export const selectDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectfetchMovieDetailsStatus = state => selectMovieDetailsState(state).fetchMovieDetailsStatus;

export const selectGenres = state => selectDetails(state).genres;
export const selectTitle = state => selectDetails(state).title;
export const selectPoster = state => selectDetails(state).poster_path;
export const selectOverview = state => selectDetails(state).overview;

export const selectVoteAvarage = state => selectDetails(state).vote_average;
export const selectVoteCount = state => selectDetails(state).vote_count;

export const selectProductionCountries = state => selectDetails(state).production_countries
export const selectReleaseDate = state => selectDetails(state).release_date;
export const selectMovieBanner = state => selectDetails(state).backdrop_path;

export const movieDetailsReducer = movieDetailsSlice.reducer;