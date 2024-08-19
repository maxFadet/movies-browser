import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActors, selectActorsStatus, selectCurrentPage, selectTotalPages, fetchActorsStart } from './actorsSlice';
import { selectSearchPeople, selectSearchPeopleStatus, searchPeople } from '../../searchActorSlice';
import { Section, Title } from './styled';
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { PersonsListTile } from '../../common/PersosListTile';
import { toPerson } from "../../routes";

const ActorsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchLoader, setShowSearchLoader] = useState(false);

    const currentPage = useSelector(selectCurrentPage);
    const totalPages = useSelector(selectTotalPages);

    const isSearching = searchQuery.length > 0;
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
            setShowSearchLoader(true);
            const searchDelayId = setTimeout(() => {
                dispatch(searchPeople(searchQuery));
                setShowSearchLoader(false);
            }, 1000);

            return () => clearTimeout(searchDelayId);
        } else {
            dispatch(fetchActorsStart({ page: currentPage }));
        }
    }, [dispatch, isSearching, searchQuery, currentPage]);

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    const handlePageChange = (page) => {
        dispatch(fetchActorsStart({ page }));
    };

    const header = isSearching
        ? `Search results for “${searchQuery}”`
        : "Popular people";

    if (showSearchLoader || status === 'loading') {
        return <Loader />;
    }

    if (status === 'failed') {
        return <Error />;
    }

    return (
        <Container>
            <Section>
                <Title>{header}</Title>
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
