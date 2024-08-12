import { all } from "redux-saga/effects";
import { moviesDetailsListSaga } from
    "./features/MovieDetailsPage/sagas/moviesDetailsListSaga";
import { movieCreditsSaga } from
    "./features/MovieDetailsPage/sagas/movieCreditsSaga";


export function* rootSaga() {
    yield all([
        moviesDetailsListSaga(),
        movieCreditsSaga(),
    ]);
};