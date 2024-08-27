import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPeople } from "../../api/searchActor";
import { searchPeople, searchPeopleSuccess, searchPeopleError } from "../slices/searchActorSlice";

function* searchPeopleHandler(action) {
    try {
        const data = yield call(fetchPeople, action.payload);
        yield put(searchPeopleSuccess({
            people: data.results,
            totalResults: data.total_results,
            totalPages: data.total_pages

        }));
    } catch (error) {
        yield put(searchPeopleError());
    }
}

export function* searchPeopleSaga() {
    yield takeLatest(searchPeople.type, searchPeopleHandler);
}
