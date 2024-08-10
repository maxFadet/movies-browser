import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { movieDetailsReducer } from './features/MovieDetailsPage/slices/movieDetailsSlice';
import { rootSaga } from './rootSaga';
import { movieCreditsReducer } from './features/MovieDetailsPage/slices/movieCreditsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movieDetails: movieDetailsReducer,
        movieCredits: movieCreditsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);