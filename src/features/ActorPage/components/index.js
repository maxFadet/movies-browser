import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../common/components/Loader';
import { Error } from '../../../common/components/Error';
import { Details } from './Content/Details';
import { Cast } from './Content/Cast';
import { Crew } from './Content/Crew';
import { Container } from '../../../common/components/Container';
import { useLoadingDelay } from './useLoadingDelay';
import { useActorData } from './useActorData';
import { successStatus, errorStatus } from "../../../common/constants/requestStatuses";

export const ActorsData = () => {
    const { id: actorId } = useParams();
    const isLoading = useLoadingDelay();
    const { actor, status, cast, crew } = useActorData(actorId);

    if (isLoading) {
        return <Loader extraTopMargin />;
    }

    if (status === errorStatus || !cast || !crew) {
        return <Error />;
    }

    if (status === successStatus && actor) {
        return (
            <Container extra>
                <Details actor={actor} />
                <Cast />
                <Crew />
            </Container>
        );
    }

    return <Error />;
};