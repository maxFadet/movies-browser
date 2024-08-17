import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../requestStatuses/loadingStatus';

const actorDetailsSlice = createSlice({
    name: 'actorDetails',
    initialState: {
        actor: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        fetchActorStart: (state) => {
            state.status = 'loading';
        },
        fetchActorSuccess: (state, action) => {
            state.status = 'succeeded';
            state.actor = action.payload;
        },
        fetchActorFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchActorStart, fetchActorSuccess, fetchActorFailure } = actorDetailsSlice.actions;

export const selectActor = (state) => state.actorDetails.actor;
export const selectActorStatus = (state) => state.actorDetails.status;

export const actorDetailsSliceReducer = actorDetailsSlice.reducer;