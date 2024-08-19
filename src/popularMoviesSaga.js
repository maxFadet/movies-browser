import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchPopularMovies,
    fetchPopularMovieSuccess,
    fetchPopularMoviesError
} from "./popularMoviesSlice";
import { API_KEY } from "./config/API_KEY";
import { BASE_URL } from "./config/BASE_URL";

function* fetchPopularMovieHandler() {
    try {
        const response = yield call(fetch, `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchPopularMovieSuccess(data));
    } catch {
        yield put(fetchPopularMoviesError());
    }
};

export function* popularMoviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMovieHandler);
};