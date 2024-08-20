import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchActorStart, fetchActorSuccess, fetchActorFailure } from './actorDetailsSlice';
import { API_KEY } from '../../config/API_KEY';
import { BASE_URL } from '../../config/BASE_URL';

function* fetchActorSaga(action) {
    try {
        const response = yield call(fetch, `${BASE_URL}/person/${action.payload}?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchActorSuccess(data));
    } catch (error) {
        console.error(error.message);
        yield put(fetchActorFailure(error.toString()));
    }
}

export function* watchFetchActor() {
    yield takeLatest(fetchActorStart.type, fetchActorSaga);
}
