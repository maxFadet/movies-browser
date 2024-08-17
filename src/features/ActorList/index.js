import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActors, selectActorsStatus, fetchActorsStart } from './actorsSlice';
import { selectSearchPeople, selectSearchPeopleStatus, searchPeople } from '../../searchActorSlice';
import { Section, Title } from './styled';
import { toPerson } from "../../routes";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResultsPage";
import { PersonsListTile } from '../../common/PersosListTile';

const ActorsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('search');

    const actors = useSelector(query ? selectSearchPeople : selectActors);
    const status = useSelector(query ? selectSearchPeopleStatus : selectActorsStatus);

    useEffect(() => {
        if (query) {
            dispatch(searchPeople(query));
        } else {
            dispatch(fetchActorsStart());
        }
    }, [dispatch, query]);

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    return (
        <Container>
            <Section>
                <Title>{query ? "Search results" : "Popular people"}</Title>
                {status === 'loading' && <Loader />}
                {status === 'succeeded' && actors.length > 0 && actors.map((actor) => (
                    <PersonsListTile
                        key={actor.id}
                        onClick={() => handleActorClick(actor.id)}
                        photo={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        name={actor.name}
                    />
                ))}
                {status === 'succeeded' && actors.length === 0 && <NoResults />}
                {status === 'failed' && <Error />}
            </Section>
            <Pagination />
        </Container>
    );
};

export default ActorsList;
