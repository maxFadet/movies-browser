import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus, successStatus, errorStatus } from "../../../common/constants/requestStatuses";

export const actorsSlice = createSlice({
    name: "popularActors",
    initialState: {
        popularActors: { results: [] },
        status: loadingStatus,
        currentPage: 1,
        totalPages: 500,
    },
    reducers: {
        fetchActorsStart: (state, action) => {
            state.status = loadingStatus;
            state.currentPage = action.payload.page || 1;
        },
        fetchActorsSuccess: (state, { payload: { actors, totalPages } }) => {
            state.status = successStatus;
            state.popularActors.results = actors;
            state.totalPages = totalPages || state.totalPages;
        },
        fetchActorsFailure: (state) => {
            state.status = errorStatus;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

export const { fetchActorsStart, fetchActorsSuccess, fetchActorsFailure, setCurrentPage } = actorsSlice.actions;

export const selectActors = state => state.actorsList;
export const selectActorsStatus = state => selectActors(state).status;
export const selectPopularActors = state => selectActors(state).popularActors;
export const selectCurrentPage = state => selectActors(state).currentPage;
export const selectTotalPages = state => selectActors(state).totalPages;

export const actorsSliceReducer = actorsSlice.reducer;