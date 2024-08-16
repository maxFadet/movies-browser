import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPeople } from "./api/searchActor";
import { searchPeople, searchPeopleSuccess, searchPeopleError } from "./searchPeopleSlice";

function* searchPeopleHandler(action) {
    try {
        const people = yield call(fetchPeople, action.payload);
        yield put(searchPeopleSuccess(people));
    } catch (error) {
        yield put(searchPeopleError());
    }
}

export function* searchPeopleSaga() {
    yield takeLatest(searchPeople.type, searchPeopleHandler);
}
