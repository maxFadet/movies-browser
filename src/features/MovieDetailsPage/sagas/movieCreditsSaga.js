import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovieCredits, fetchMovieCreditsSuccess, fetchMovieCreditsError } from "../slices/movieCreditsSlice";
import { getResponse } from "../../../getResponse";

function* fetchMovieCreditsApiHandler() {
    try {
        const moviesDetails = yield call(getResponse, "movieCreditsData.json");
        yield put(fetchMovieCreditsSuccess(moviesDetails));
    } catch {
        yield put(fetchMovieCreditsError());
    }
};

export function* movieCreditsSaga() {
    yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsApiHandler);
};