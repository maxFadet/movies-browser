import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchActorsStart, fetchActorsSuccess, fetchActorsFailure } from './actorsSlice';
import { BASE_URL } from '../../config/BASE_URL';
import { API_KEY } from '../../config/API_KEY';

function* fetchActorsSaga() {
    try {
        const response = yield call(fetch, `${BASE_URL}/person/popular?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchActorsSuccess(data.results));
    } catch (error) {
        yield put(fetchActorsFailure(error.toString()));
    }
}

export function* watchFetchActors() {
    yield takeLatest(fetchActorsStart.type, fetchActorsSaga);
}