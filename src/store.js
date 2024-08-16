import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { moviesDetailsListReducer } from './features/MovieDetailsPage/slices/moviesDetailsListSlice';
import { rootSaga } from './rootSaga';
import { moviesCreditsListReducer } from './features/MovieDetailsPage/slices/moviesCredditsListSlice';
import { popularMoviesReducer } from './popularMoviesSlice';
import { moviesGenresReducer } from './moviesGenresSlice';
import { searchMoviesReducer } from './searchMoviesSlice';
import { searchPeopleReducer } from './searchActorSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        moviesDetailsList: moviesDetailsListReducer,
        moviesCreditsList: moviesCreditsListReducer,
        popularMovies: popularMoviesReducer,
        moviesGenres: moviesGenresReducer,
        searchMovies: searchMoviesReducer,
        searchPeople: searchPeopleReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);