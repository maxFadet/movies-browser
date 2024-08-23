import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchActorsStart, fetchActorsSuccess, fetchActorsFailure } from './actorsSlice';
import { BASE_URL } from '../../common/constants/config/BASE_URL';
import { API_KEY } from '../../common/constants/config/API_KEY';

function* fetchActorsSaga(action) {
    const { page = 1 } = action.payload;
    try {
        const response = yield call(fetch, `${BASE_URL}/person/popular?api_key=${API_KEY}&page=${page}`);
        const data = yield response.json();
        yield put(fetchActorsSuccess({
            actors: data.results,
            totalPages: Math.min(data.total_pages, 500)
        }));
    } catch (error) {
        yield put(fetchActorsFailure(error.toString()));
    }
}

export function* watchFetchActors() {
    yield takeLatest(fetchActorsStart.type, fetchActorsSaga);
}