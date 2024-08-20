import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchActorStart, fetchActorSuccess, fetchActorFailure, fetchCastAndCrewSuccess } from './actorDetailsSlice';
import { API_KEY } from '../../config/API_KEY';
import { BASE_URL } from '../../config/BASE_URL';

function* fetchActorSaga(action) {
    try {
        const response = yield call(fetch, `${BASE_URL}/person/${action.payload}?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchActorSuccess(data));

        const creditsResponse = yield call(fetch, `${BASE_URL}/person/${action.payload}/movie_credits?api_key=${API_KEY}`);
        const creditsData = yield creditsResponse.json();
        yield put(fetchCastAndCrewSuccess(creditsData));

    } catch (error) {
        console.error(error.message);
        yield put(fetchActorFailure(error.toString()));
    }
}

export function* watchFetchActor() {
    yield takeLatest(fetchActorStart.type, fetchActorSaga);
}