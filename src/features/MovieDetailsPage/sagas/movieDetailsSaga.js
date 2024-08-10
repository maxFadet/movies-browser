import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovieDetailsApi, fetchMovieDetailsSuccess, fetchMovieDetailsError } from "../slices/movieDetailsSlice";
import { getResponse } from "../../../getResponse";

function* fetchMovieDetailsApiHandler() {
    try {
        const movieDetails = yield call(getResponse, "movieDetailsData.json");
        yield put(fetchMovieDetailsSuccess(movieDetails));
    } catch {
        yield put(fetchMovieDetailsError());
    }
};

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetailsApi.type, fetchMovieDetailsApiHandler);
};