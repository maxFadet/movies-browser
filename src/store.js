import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { movieDetailsReducer } from './features/MovieDetailsPage/slices/movieDetailsSlice';
import { rootSaga } from './rootSaga';
import { moviesCreditsListReducer } from './features/MovieDetailsPage/slices/moviesCredditsListSlice';
import { popularMoviesReducer } from './popularMoviesSlice';
import { moviesGenresReducer } from './moviesGenresSlice';
import { searchMoviesReducer } from './searchMoviesSlice';
import { searchPeopleReducer } from './searchActorSlice';
import { actorsSliceReducer } from "./features/ActorList/actorsSlice";
import { actorDetailsSliceReducer } from "./features/ActorPage/actorDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movieDetails: movieDetailsReducer,
        moviesCreditsList: moviesCreditsListReducer,
        popularMovies: popularMoviesReducer,
        moviesGenres: moviesGenresReducer,
        searchMovies: searchMoviesReducer,
        searchPeople: searchPeopleReducer,
        actorsList: actorsSliceReducer,
        actorDetails: actorDetailsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);