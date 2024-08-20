import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus } from '../../requestStatuses/loadingStatus';
import { errorStatus } from '../../requestStatuses/errorStatus';
import { successStatus } from '../../requestStatuses/successStatus';

const actorDetailsSlice = createSlice({
    name: 'actorDetails',
    initialState: {
        actor: null,
        status: loadingStatus,
        error: null,
    },
    reducers: {
        fetchActorStart: (state) => {
            state.status = loadingStatus;
        },
        fetchActorSuccess: (state, action) => {
            state.status = successStatus;
            state.actor = action.payload;
        },
        fetchActorFailure: (state, action) => {
            state.status = errorStatus;
            state.error = action.payload;
        },
    },
});

export const { fetchActorStart, fetchActorSuccess, fetchActorFailure } = actorDetailsSlice.actions;

export const selectActor = (state) => state.actorDetails.actor;
export const selectActorStatus = (state) => state.actorDetails.status;

export const actorDetailsSliceReducer = actorDetailsSlice.reducer;