import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectActors,
    selectActorsStatus,
    selectCurrentPage,
    fetchActorsStart
} from './actorsSlice';
import {
    selectSearchPeople,
    selectSearchPeopleStatus,
    searchPeople
} from '../../searchActorSlice';
import { Section, Title } from './styled';
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { PersonsListTile } from '../../common/PersosListTile';
import { toPerson } from "../../routes";
import { loadingStatus } from '../../requestStatuses/loadingStatus';
import { errorStatus } from '../../requestStatuses/errorStatus';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const ActorsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const debouncedSearchQuery = useDebounce(searchQuery, 1000);

    const currentPage = useSelector(selectCurrentPage);
    const totalPages = 500;
    const isSearching = debouncedSearchQuery.length > 0;
    const actors = useSelector(isSearching ? selectSearchPeople : selectActors);
    const status = useSelector(isSearching ? selectSearchPeopleStatus : selectActorsStatus);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("search");
        if (query && query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [location, searchQuery]);

    useEffect(() => {
        if (isSearching) {
            setIsLoading(true);
            const searchDelayId = setTimeout(() => {
                dispatch(searchPeople(debouncedSearchQuery));
                setIsLoading(false);
            }, 1000);

            return () => clearTimeout(searchDelayId);
        } else {
            dispatch(fetchActorsStart({ page: currentPage }));
            const loadingDelayId = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            return () => clearTimeout(loadingDelayId);
        }
    }, [dispatch, isSearching, debouncedSearchQuery, currentPage]);

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    const handlePageChange = (page) => {
        setIsLoading(true);
        dispatch(fetchActorsStart({ page }));
    };

    if (isLoading || status === loadingStatus) {
        return <Loader showText={false} />;
    }

    if (status === errorStatus) {
        return <Error />;
    }

    return (
        <Container>
            <Section>
                <Title>Popular people</Title>
                {actors.length > 0 && (
                    actors.map((actor) => (
                        <PersonsListTile
                            key={actor.id}
                            onClick={() => handleActorClick(actor.id)}
                            photo={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            name={actor.name}
                        />
                    ))
                )}
            </Section>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </Container>
    );
};

export default ActorsList;