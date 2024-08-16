import { all } from "redux-saga/effects";
import { moviesDetailsListSaga } from
    "./features/MovieDetailsPage/sagas/moviesDetailsListSaga";
import { movieCreditsSaga } from
    "./features/MovieDetailsPage/sagas/movieCreditsSaga";
import { popularMoviesSaga } from "./popularMoviesSaga";
import { moviesGenresSaga } from "./moviesGenresSaga";
import { searchMoviesSaga } from './searchMoviesSaga';

export function* rootSaga() {
    yield all([
        moviesDetailsListSaga(),
        movieCreditsSaga(),
        popularMoviesSaga(),
        moviesGenresSaga(),
        searchMoviesSaga(),
    ]);
};