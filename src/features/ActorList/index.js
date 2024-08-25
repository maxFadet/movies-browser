import { useEffect, useState } from 'react';
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
import { Tile } from '../../common/Tile';
import { toPerson } from "../../routes";
import { loadingStatus } from '../../requestStatuses/loadingStatus';
import { errorStatus } from '../../requestStatuses/errorStatus';
import { NoResults } from '../../common/NoResultsPage';
import { queryKey } from '../../queryKey';

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
    const [isLoading, setIsLoading] = useState(false);
    const [headerText, setHeaderText] = useState("Popular people");

    const debouncedSearchQuery = useDebounce(searchQuery, 1000);

    const currentPage = useSelector(selectCurrentPage);
    const totalPages = 500;
    const isSearching = debouncedSearchQuery.length > 0;
    const actors = useSelector(isSearching ? selectSearchPeople : selectActors);
    const status = useSelector(isSearching ? selectSearchPeopleStatus : selectActorsStatus);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("search");
        if (query !== searchQuery) {
            setSearchQuery(query || "");
            setHeaderText(query ? `Search results for “${query}”` : "Popular people");
        }
    }, [location.search, searchQuery]);

    useEffect(() => {
        if (isSearching) {
            setIsLoading(true);
            const searchDelayId = setTimeout(() => {
                dispatch(searchPeople(debouncedSearchQuery));
                setIsLoading(false);
            }, 300);

            return () => clearTimeout(searchDelayId);
        } else {
            dispatch(fetchActorsStart({ page: currentPage }));
            setIsLoading(true);
            const loadingDelayId = setTimeout(() => {
                setIsLoading(false);
            }, 1500);

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

    if (actors.length === 0 && isSearching) {
        return <NoResults query={searchQuery} />;
    }

    return (
        <Container>
            <Section>
                <Title>{headerText}</Title>
                {actors.length > 0 && (
                    actors.map(({ id, name, profile_path }) => (
                        <Tile
                            key={id}
                            id={id}
                            image={profile_path}
                            title={name}
                            navigateTo={() => handleActorClick(id)}
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