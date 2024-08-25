import { all } from "redux-saga/effects";
import { movieDetailsSaga } from
    "./features/MovieDetailsPage/sagas/movieDetailsSaga";
import { movieCreditsSaga } from
    "./features/MovieDetailsPage/sagas/movieCreditsSaga";
import { popularMoviesSaga } from "./features/MoviesListPage/sagas/popularMoviesSaga";
import { moviesGenresSaga } from "./common/sagas/moviesGenresSaga";
import { searchMoviesSaga } from './common/sagas/searchMoviesSaga';
import { searchPeopleSaga } from "./common/sagas/searchActorSaga";
import { watchFetchActors } from "./features/ActorList/sagas/actorsSaga"
import { watchFetchActor } from "./features/ActorPage/sagas/actorDetailsSaga";

export function* rootSaga() {
    yield all([
        movieDetailsSaga(),
        movieCreditsSaga(),
        popularMoviesSaga(),
        moviesGenresSaga(),
        searchMoviesSaga(),
        searchPeopleSaga(),
        watchFetchActors(),
        watchFetchActor(),
    ]);
};