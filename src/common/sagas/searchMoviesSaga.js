import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies } from "../../api/searchMovies";
import { searchMovies, searchMoviesSuccess, searchMoviesError } from "../slices/searchMoviesSlice";

function* searchMoviesHandler(action) {
    try {
        const movies = yield call(fetchMovies, action.payload);
        yield put(searchMoviesSuccess(movies));
    } catch (error) {
        yield put(searchMoviesError());
    }
}

export function* searchMoviesSaga() {
    yield takeLatest(searchMovies.type, searchMoviesHandler);
}
