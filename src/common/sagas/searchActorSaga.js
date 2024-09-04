import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPeople } from "../../api/searchActor";
import { searchPeople, searchPeopleSuccess, searchPeopleError } from "../slices/searchActorSlice";

function* searchPeopleHandler(action) {
    try {
        const { query, page } = action.payload;
        const data = yield call(fetchPeople, query, page);
        if (data.results.length === 0) {
            yield put(searchPeopleError());
        } else {
            yield put(searchPeopleSuccess({
                people: data.results,
                totalResults: data.total_results,
                totalPages: data.total_pages,
                page: data.page
            }));
        }
    } catch (error) {
        yield put(searchPeopleError());
    }
}

export function* searchPeopleSaga() {
    yield takeLatest(searchPeople.type, searchPeopleHandler);
}
