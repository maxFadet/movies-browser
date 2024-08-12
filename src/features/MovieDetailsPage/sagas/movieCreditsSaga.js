import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesCreditsList, fetchMoviesCreditsListSuccess, fetchMoviesCreditsListError } from "../slices/moviesCredditsListSlice";
import { getResponse } from "../../../getResponse";

function* fetchMoviesCreditsListApiHandler() {
    try {
        const movieCredits = yield call(getResponse, "moviesCreditsList.json");
        yield put(fetchMoviesCreditsListSuccess(movieCredits));
    } catch {
        yield put(fetchMoviesCreditsListError());
    }
};

export function* movieCreditsSaga() {
    yield takeLatest(fetchMoviesCreditsList.type, fetchMoviesCreditsListApiHandler);
};