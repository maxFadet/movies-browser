import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovieCredits, fetchMovieCreditsSuccess, fetchMovieCreditsError } from "../slices/movieCreditsSlice";
import { getResponse } from "../../../getResponse";

function* fetchMovieCreditsApiHandler() {
    try {
        const movieCredits = yield call(getResponse, "movieCreditsData.json");
        yield put(fetchMovieCreditsSuccess(movieCredits));
    } catch {
        yield put(fetchMovieCreditsError());
    }
};

export function* movieCreditsSaga() {
    yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsApiHandler);
};