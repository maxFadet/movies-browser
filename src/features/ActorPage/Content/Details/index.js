import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActorStart, selectActor, selectActorStatus } from '../../actorDetailsSlice';
import {
    ActorProfile,
    ActorPhoto,
    ActorName,
    ActorDetails,
    ActorDetailsWrapper,
    DetailLabel,
    Biography,
    ActorDetail
} from "./styled";

export const Details = ({ actorId }) => {
    const dispatch = useDispatch();

    const actor = useSelector(selectActor);
    const status = useSelector(selectActorStatus);

    useEffect(() => {
        if (actorId) {
            dispatch(fetchActorStart(actorId));
        }
    }, [dispatch, actorId]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        return <p>Error loading actor details.</p>;
    }

    return (
        actor && (
            <ActorProfile>
                <ActorPhoto src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                <ActorDetailsWrapper>
                    <ActorName>{actor.name}</ActorName>
                    <ActorDetails>
                        <ActorDetail>
                            <DetailLabel>Date of birth:</DetailLabel>
                            {actor.birthday || "Unknown"}
                        </ActorDetail>
                        <ActorDetail>
                            <DetailLabel>Place of birth:</DetailLabel>
                            {actor.place_of_birth || "Unknown"}
                        </ActorDetail>
                    </ActorDetails>
                </ActorDetailsWrapper>
                <Biography>{actor.biography || "Biography not available."}</Biography>
            </ActorProfile>
        )
    );
};
