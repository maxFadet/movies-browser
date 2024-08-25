import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPopularMovies, fetchPopularMovieSuccess, fetchPopularMoviesError } from "../slices/popularMoviesSlice";
import { API_KEY } from "../../../common/constants/config";
import { BASE_URL } from "../../../common/constants/config";

function* fetchPopularMovieHandler(action) {
    const { page = 1 } = action.payload;
    try {
        const response = yield call(fetch, `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
        const data = yield response.json();
        yield put(fetchPopularMovieSuccess({
            movies: data.results,
            totalPages: Math.min(data.total_pages, 500)
        }));
    } catch {
        yield put(fetchPopularMoviesError());
    }
}


export function* popularMoviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMovieHandler);
};