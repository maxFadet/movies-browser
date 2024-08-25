import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    fetchActorStart,
    selectActor,
    selectActorStatus,
    selectCast,
    selectCrew
} from './actorDetailsSlice';
import { Loader } from '../../common/components/Loader';
import { Error } from '../../common/components/Error';
import { Details } from './Content/Details';
import { Cast } from './Content/Cast';
import { Crew } from './Content/Crew';
import { loadingStatus, successStatus, errorStatus } from "../../common/constants/requestStatuses";
import { Container } from '../../common/components/Container';

export const ActorsData = () => {
    const { id: actorId } = useParams();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const actor = useSelector(selectActor);
    const status = useSelector(selectActorStatus);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);

    useEffect(() => {
        const loaderTimeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        dispatch(fetchActorStart(actorId));

        return () => clearTimeout(loaderTimeoutId);
    }, [dispatch, actorId]);

    if (isLoading || status === loadingStatus) {
        return <Loader showText={false} />;
    }

    if (status === errorStatus) {
        return <Error />;
    }

    if (status === successStatus && actor) {
        return (
            <Container>
                <Details actor={actor} />
                {
                    cast.length > 0 && (
                        <Cast cast={cast} />
                    )
                }
                {
                    crew.length > 0 && (
                        <Crew crew={crew} />
                    )
                }
            </Container>
        );
    }

    return <Error />;
};