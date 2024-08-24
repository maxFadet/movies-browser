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
} from '../../common/slices/searchActorSlice';
import { Section, Title } from './styled';
import { Pagination } from "../../common/components/Pagination";
import { Container } from "../../common/components/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Error } from "../../common/components/Error";
import { Loader } from "../../common/components/Loader";
import { PersonsListTile } from '../../common/components/PersosListTile';
import { toPerson } from "../../routes";
import { loadingStatus } from '../../common/constants/requestStatuses';
import { errorStatus } from '../../common/constants/requestStatuses';
import { NoResults } from '../../common/components/NoResultsPage';
import { queryKey } from '../../common/constants/queryKey';

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
            }, 1000);

            return () => clearTimeout(searchDelayId);
        } else {
            dispatch(fetchActorsStart({ page: currentPage }));
            setIsLoading(true);
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

    const header = isSearching
        ? `Search results for “${searchQuery}”`
        : "Popular people";

    if (actors.length === 0) {
        return <NoResults query={searchQuery} />;
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
                            photo={actor.profile_path}
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