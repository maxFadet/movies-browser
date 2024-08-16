import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchMoviesDetailsList,
    fetchMoviesDetailsListSuccess,
    fetchMoviesDetailsListError,
} from "../slices/moviesDetailsListSlice";
import { getResponse } from "../../../functions/getResponse";

function* fetchMoviesDetailsListHandler() {
    try {
        const moviesDetailsList = yield call(getResponse, "movieDetailsListData.json");
        yield put(fetchMoviesDetailsListSuccess(moviesDetailsList));
    } catch {
        yield put(fetchMoviesDetailsListError());
    }
};

export function* moviesDetailsListSaga() {
    yield takeLatest(fetchMoviesDetailsList.type, fetchMoviesDetailsListHandler);
};