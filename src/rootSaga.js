import { all } from "redux-saga/effects";
import { movieDetailsSaga } from
    "./features/MovieDetailsPage/sagas/movieDetailsSaga";
import { movieCreditsSaga } from
    "./features/MovieDetailsPage/sagas/movieCreditsSaga";
import { watchFetchActor } from "./features/ActorPage/sagas/actorDetailsSaga";

export function* rootSaga() {
    yield all([
        movieDetailsSaga(),
        movieCreditsSaga(),
        watchFetchActor(),
    ]);
};