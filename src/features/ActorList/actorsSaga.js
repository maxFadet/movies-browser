import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchActorsStart, fetchActorsSuccess, fetchActorsFailure } from './actorsSlice';

const API_KEY = '57afc837c270fb1a287ab5e06dc4e352';
const BASE_URL = 'https://api.themoviedb.org/3';

function* fetchActorsSaga(action) {
    const { page = 1 } = action.payload;
    try {
        const response = yield call(fetch, `${BASE_URL}/person/popular?api_key=${API_KEY}&page=${page}`);
        const data = yield response.json();
        yield put(fetchActorsSuccess(data.results));
    } catch (error) {
        yield put(fetchActorsFailure(error.toString()));
    }
}

export function* watchFetchActors() {
    yield takeLatest(fetchActorsStart.type, fetchActorsSaga);
}