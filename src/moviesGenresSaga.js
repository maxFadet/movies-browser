import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesGenres, fetchMoviesGenresSuccess, fetchMoviesGenresError } from "./moviesGenresSlice";
import { getResponse } from "./functions/getResponse";

function* fetchMoviesGenresHandler() {
    try {
        const moviesGenres = yield call(getResponse, "genresMovies.json");
        yield put(fetchMoviesGenresSuccess(moviesGenres));
    } catch {
        yield put(fetchMoviesGenresError());
    }
};

export function* moviesGenresSaga() {
    yield takeLatest(fetchMoviesGenres.type, fetchMoviesGenresHandler);
};