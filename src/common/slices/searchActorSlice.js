import { createSlice } from "@reduxjs/toolkit";
import { successStatus } from "../constants/requestStatuses";
import { loadingStatus } from "../constants/requestStatuses";
import { errorStatus } from "../constants/requestStatuses";

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
        resetSearchPeople: () => {
            return {
                people: [],
                searchStatus: loadingStatus,
            };
        },
    },
});

export const { searchPeople, searchPeopleSuccess, searchPeopleError, resetSearchPeople } = searchActorSlice.actions;

export const selectSearchPeopleState = (state) => state.searchPeople;
export const selectSearchPeopleStatus = (state) => selectSearchPeopleState(state).searchStatus;
export const selectSearchPeople = (state) => selectSearchPeopleState(state).people;

export const searchPeopleReducer = searchActorSlice.reducer;
