import { all } from "redux-saga/effects";
import { movieDetailsSaga } from
    "./features/MovieDetailsPage/sagas/movieDetailsSaga";
import { movieCreditsSaga } from
    "./features/MovieDetailsPage/sagas/movieCreditsSaga";


export function* rootSaga() {
    yield all([
        movieDetailsSaga(),
        movieCreditsSaga(),
    ]);
};