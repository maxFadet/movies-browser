import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies } from "../../api/searchMovies";
import { searchMovies, searchMoviesSuccess, searchMoviesError } from "../slices/searchMoviesSlice";

function* searchMoviesHandler(action) {
    try {
        const { query, page } = action.payload;
        if (!query) {
            return;
        }
        const data = yield call(fetchMovies, query, page );
        yield put(searchMoviesSuccess({
            movies: data.results,
            totalResults: data.total_results,
            totalPages: data.total_pages,
            page: data.page
        }));
    } catch (error) {
        yield put(searchMoviesError());
    }
}

export function* searchMoviesSaga() {
    yield takeLatest(searchMovies.type, searchMoviesHandler);
}
