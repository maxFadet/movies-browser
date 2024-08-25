import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies } from "../../api/searchMovies";
import { searchMovies, searchMoviesSuccess, searchMoviesError } from "../slices/searchMoviesSlice";

function* searchMoviesHandler(action) {
    try {
        const data = yield call(fetchMovies, action.payload);
        yield put(searchMoviesSuccess({
            movies: data.results,
            totalResults: data.total_results
        }));
    } catch (error) {
        yield put(searchMoviesError());
    }
}

export function* searchMoviesSaga() {
    yield takeLatest(searchMovies.type, searchMoviesHandler);
}
