import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesGenres, fetchMoviesGenresSuccess, fetchMoviesGenresError } from "./moviesGenresSlice";
import { API_KEY } from "./config/API_KEY";
import { BASE_URL } from "./config/BASE_URL";

function* fetchMoviesGenresHandler() {
    try {
        const response = yield call(fetch,
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchMoviesGenresSuccess(data));
    } catch {
        yield put(fetchMoviesGenresError());
    }
};

export function* moviesGenresSaga() {
    yield takeLatest(fetchMoviesGenres.type, fetchMoviesGenresHandler);
};