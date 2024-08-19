import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../requestStatuses/loadingStatus';

export const actorsSlice = createSlice({
    name: "actorsList",
    initialState: {
        actors: [],
        status: loadingStatus,
        error: null,
        currentPage: 1,
        totalPages: 500
    },
    reducers: {
        fetchActorsStart: (state, action) => {
            state.status = 'loading';
            state.currentPage = action.payload.page || 1;
        },
        fetchActorsSuccess: (state, action) => {
            state.status = 'succeeded';
            state.actors = action.payload;
        },
        fetchActorsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { fetchActorsStart, fetchActorsSuccess, fetchActorsFailure } = actorsSlice.actions;

export const selectActors = state => state.actorsList.actors;
export const selectActorsStatus = state => state.actorsList.status;
export const selectCurrentPage = state => state.actorsList.currentPage;
export const selectTotalPages = state => state.actorsList.totalPages;

export const actorsSliceReducer = actorsSlice.reducer;