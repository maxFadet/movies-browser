import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { moviesDetailsListReducer } from './features/MovieDetailsPage/slices/moviesDetailsListSlice';
import { rootSaga } from './rootSaga';
import { moviesCreditsListReducer } from './features/MovieDetailsPage/slices/moviesCredditsListSlice';
import { popularMoviesReducer } from './popularMoviesSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        moviesDetailsList: moviesDetailsListReducer,
        moviesCreditsList: moviesCreditsListReducer,
        popularMovies: popularMoviesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);