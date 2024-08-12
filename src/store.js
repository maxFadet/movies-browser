import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { moviesDetailsListReducer } from './features/MovieDetailsPage/slices/moviesDetailsListSlice';
import { rootSaga } from './rootSaga';
import { movieCreditsReducer } from './features/MovieDetailsPage/slices/movieCreditsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        moviesDetailsList: moviesDetailsListReducer,
        movieCredits: movieCreditsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);