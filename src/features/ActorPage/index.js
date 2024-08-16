import React from 'react';
import { Container } from "../../common/Container";
import { Details } from "./Content/Details";
import { Cast } from "./Content/Cast";
import { Crew } from "./Content/Crew";
import { useParams } from 'react-router-dom';

export const ActorsData = () => {
    const { id: actorId } = useParams();

    return (
        <Container>
            <Details actorId={actorId} />
            <Cast />
            <Crew />
        </Container>
    );
};
