import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../constants/requestStatuses";

export const searchActorSlice = createSlice({
    name: "searchPeople",
    initialState: {
        people: [],
        searchStatus: loadingStatus,
        totalResults: 0,
    },
    reducers: {
        searchPeople: (state) => {
            state.searchStatus = loadingStatus;
        },
        searchPeopleSuccess: (state, { payload: {people, totalResults} }) => {
            state.people = people;
            state.totalResults = totalResults;
            state.searchStatus = successStatus;
        },
        searchPeopleError: (state) => {
            state.searchStatus = errorStatus;
        },
        resetSearchPeople: () => {
            return {
                people: [],
                searchStatus: loadingStatus,
                totalResults: 0,
            };
        },
    },
});

export const { searchPeople, searchPeopleSuccess, searchPeopleError, resetSearchPeople } = searchActorSlice.actions;

export const selectSearchPeopleState = (state) => state.searchPeople;
export const selectSearchPeopleStatus = (state) => selectSearchPeopleState(state).searchStatus;
export const selectSearchPeople = (state) => selectSearchPeopleState(state).people;
export const selectTotalResults = (state) => selectSearchPeopleState(state).totalResults;


export const searchPeopleReducer = searchActorSlice.reducer;
