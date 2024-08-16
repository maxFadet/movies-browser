import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "./requestStatuses/successStatus";
import { loadingStatus } from "./requestStatuses/loadingStatus";
import { errorStatus } from "./requestStatuses/errorStatus";

export const searchActorSlice = createSlice({
    name: "searchPeople",
    initialState: {
        people: [],
        searchStatus: loadingStatus,
    },
    reducers: {
        searchPeople: (state) => {
            state.searchStatus = loadingStatus;
        },
        searchPeopleSuccess: (state, { payload: people }) => {
            state.people = people;
            state.searchStatus = successStatus;
        },
        searchPeopleError: (state) => {
            state.searchStatus = errorStatus;
        },
    },
});

export const { searchPeople, searchPeopleSuccess, searchPeopleError } = searchPeopleSlice.actions;

export const selectSearchPeopleState = (state) => state.searchPeople;
export const selectSearchPeopleStatus = (state) => selectSearchPeopleState(state).searchStatus;
export const selectSearchPeople = (state) => selectSearchPeopleState(state).people;

export const searchPeopleReducer = searchPeopleSlice.reducer;
