import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActors, selectActorsStatus, fetchActorsStart } from './actorsSlice';
import { selectSearchPeople, selectSearchPeopleStatus, searchPeople } from '../../searchActorSlice';
import { Section, Title } from './styled';
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResultsPage";
import { PersonsListTile } from '../../common/PersosListTile';
import { toPerson } from "../../routes";

const ActorsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("search");
        if (query && query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [location, searchQuery]);

    const isSearching = searchQuery.length > 0;

    const actors = useSelector(isSearching ? selectSearchPeople : selectActors);
    const status = useSelector(isSearching ? selectSearchPeopleStatus : selectActorsStatus);

    useEffect(() => {
        if (isSearching) {
            dispatch(searchPeople(searchQuery));
        } else {
            dispatch(fetchActorsStart());
        }
    }, [dispatch, isSearching, searchQuery]);

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    const header = isSearching
        ? `Search results for “${searchQuery}”`
        : "Popular people";

    return (
        <Container>
            <Section>
                <Title>{header}</Title>
                {status === 'loading' && <Loader />}
                {status === 'succeeded' && actors.length > 0 && (
                    <>
                        {actors.map((actor) => (
                            <PersonsListTile
                                key={actor.id}
                                onClick={() => handleActorClick(actor.id)}
                                photo={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                name={actor.name}
                            />
                        ))}
                    </>
                )}
                {status === 'succeeded' && actors.length === 0 && <NoResults />}
                {status === 'failed' && <Error />}
            </Section>
            <Pagination />
        </Container>
    );
};

export default ActorsList;
