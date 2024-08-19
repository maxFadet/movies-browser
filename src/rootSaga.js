import { all } from "redux-saga/effects";
import { movieDetailsSaga } from
    "./features/MovieDetailsPage/sagas/movieDetails";
import { movieCreditsSaga } from
    "./features/MovieDetailsPage/sagas/movieCreditsSaga";
import { popularMoviesSaga } from "./popularMoviesSaga";
import { moviesGenresSaga } from "./moviesGenresSaga";
import { searchMoviesSaga } from './searchMoviesSaga';
import { searchPeopleSaga } from "./searchActorSaga";
import { watchFetchActors } from "./features/ActorList/actorsSaga"
import { watchFetchActor } from "./features/ActorPage/actorDetailsSaga";

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