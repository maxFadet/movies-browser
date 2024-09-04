import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../constants/requestStatuses";

export const searchActorSlice = createSlice({
    name: "searchPeople",
    initialState: {
        people: [],
        searchStatus: loadingStatus,
        searchResultsText: "",
        totalResults: 0,
        totalPages: 0,
        currentPage: 1,
    },
    reducers: {
        searchPeople: (state, action) => {  // Добавил action для корректной передачи параметров
            state.searchStatus = loadingStatus;
        },
        searchPeopleSuccess: (state, { payload: { people, totalResults, totalPages, page } }) => {
            state.people = people;
            state.totalResults = totalResults;
            state.totalPages = totalPages;
            state.searchStatus = successStatus;
            state.currentPage = page;
        },
        searchPeopleError: (state) => {
            state.searchStatus = errorStatus;
        },
        resetSearchPeople: () => {
            return {
                people: [],
                searchStatus: loadingStatus,
                totalResults: 0,
                totalPages: 0,
                searchResultsText: "",
                currentPage: 1,
            };
        },
        setSearchResultsText: (state, action) => {
            state.searchResultsText = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { searchPeople, searchPeopleSuccess, searchPeopleError, resetSearchPeople, setSearchResultsText, setCurrentPage } = searchActorSlice.actions;

export const selectSearchPeopleState = (state) => state.searchPeople;
export const selectSearchPeopleStatus = (state) => selectSearchPeopleState(state).searchStatus;
export const selectSearchPeople = (state) => selectSearchPeopleState(state).people;
export const selectTotalResults = (state) => selectSearchPeopleState(state).totalResults;
export const selectTotalPages = (state) => selectSearchPeopleState(state).totalPages;
export const selectCurrentPage = (state) => selectSearchPeopleState(state).currentPage;
export const selectSearchResultsText = (state) => state.searchPeople.searchResultsText;

export const searchPeopleReducer = searchActorSlice.reducer;