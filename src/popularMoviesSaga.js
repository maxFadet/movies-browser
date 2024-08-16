import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, fetchPopularMovieSuccess, fetchPopularMoviesError } from "./popularMoviesSlice";
import { getResponse } from "./functions/getResponse";


function* fetchPopularMovieHandler() {
    try {
        const popularMovies = yield call(getResponse, "popularMovies.json");
        yield put(fetchPopularMovieSuccess(popularMovies));
    } catch {
        yield put(fetchPopularMoviesError());
    }
};

export function* popularMoviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMovieHandler);
};