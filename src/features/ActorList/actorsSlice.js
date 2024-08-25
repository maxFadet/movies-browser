import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus, successStatus, errorStatus } from "../../common/constants/requestStatuses";

export const actorsSlice = createSlice({
    name: "actorsList",
    initialState: {
        actors: [],
        status: loadingStatus,
        error: null,
        currentPage: 1,
        totalPages: 500,
    },
    reducers: {
        fetchActorsStart: (state, action) => {
            state.status = loadingStatus;
            state.currentPage = action.payload.page || 1;
        },
        fetchActorsSuccess: (state, action) => {
            state.status = successStatus;
            state.actors = action.payload.actors;
            state.totalPages = action.payload.totalPages || 500;
        },
        fetchActorsFailure: (state, action) => {
            state.status = errorStatus;
            state.error = action.payload;
        },
    },
});

export const { fetchActorsStart, fetchActorsSuccess, fetchActorsFailure } = actorsSlice.actions;

export const selectActors = (state) => state.actorsList.actors;
export const selectActorsStatus = (state) => state.actorsList.status;
export const selectCurrentPage = (state) => state.actorsList.currentPage;
export const selectTotalPages = (state) => state.actorsList.totalPages;

export const actorsSliceReducer = actorsSlice.reducer;