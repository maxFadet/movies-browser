import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../requestStatuses/loadingStatus';

export const actorsSlice = createSlice({
    name: "actorsList",
    initialState: {
        actors: [],
        status: loadingStatus,
        error: null
    },
    reducers: {
        fetchActorsStart: (state) => {
            state.status = 'loading';
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

export const actorsSliceReducer = actorsSlice.reducer;