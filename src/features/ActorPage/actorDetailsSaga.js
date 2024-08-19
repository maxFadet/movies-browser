import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchActorStart, fetchActorSuccess, fetchActorFailure } from './actorDetailsSlice';

const API_KEY = '57afc837c270fb1a287ab5e06dc4e352';
const BASE_URL = 'https://api.themoviedb.org/3';

function* fetchActorSaga(action) {
    try {
        const response = yield call(fetch, `${BASE_URL}/person/${action.payload}?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchActorSuccess(data));
    } catch (error) {
        yield put(fetchActorFailure(error.toString()));
    }
}

export function* watchFetchActor() {
    yield takeLatest(fetchActorStart.type, fetchActorSaga);
}
