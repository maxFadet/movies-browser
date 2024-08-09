import { all } from "redux-saga/effects";
import { movieDetailsSaga } from "./movieDetailsSaga";


export function* rootSaga() {
    yield all([
        movieDetailsSaga(),
    ]);
};