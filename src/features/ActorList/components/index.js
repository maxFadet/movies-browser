import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActors, selectActorsStatus, selectCurrentPage, fetchActorsStart, selectTotalPages } from '../slices/actorsSlice';
import { selectSearchPeople, selectSearchPeopleStatus, searchPeople, selectTotalResults, selectTotalPages as selectSearchPeoplePages } from '../../../common/slices/searchActorSlice';
import { Pagination } from "../../../common/components/Pagination";
import { Container } from "../../../common/components/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Error } from "../../../common/components/Error";
import { Loader } from "../../../common/components/Loader";
import { Tile } from '../../../common/components/Tile';
import { toPerson } from "../../../routes";
import { loadingStatus, errorStatus } from "../../../common/constants/requestStatuses";
import { NoResults } from '../../../common/components/NoResultsPage';
import { PeopleTilesList } from '../../../common/components/PeopleTilesList';
import { queryKey } from '../../../common/constants/queryKey';

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

    const totalResults = useSelector(selectTotalResults);
    const currentPage = useSelector(selectCurrentPage);
    const totalPagesPopular = useSelector(selectTotalPages);
    const totalPagesSearch = useSelector(selectSearchPeoplePages);

    const isSearching = debouncedSearchQuery.length > 0;
    const actors = useSelector(isSearching ? selectSearchPeople : selectActors);
    const status = useSelector(isSearching ? selectSearchPeopleStatus : selectActorsStatus);

    const totalPages = isSearching ? totalPagesSearch : totalPagesPopular;

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page'), 10) || 1;
        dispatch(fetchActorsStart({ page }));
    }, [dispatch, location.search]);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
        setSearchQuery(query || "");

        if (query) {
            setHeaderText(totalResults > 0
                ? `Search results for “${query}” (${totalResults})`
                : `Search results for “${query}”`);
        } else {
            setHeaderText("Popular people");
        }
    }, [location.search, totalResults]);

    useEffect(() => {
        if (isSearching) {
            setIsLoading(true);
            const searchDelayId = setTimeout(() => {
                dispatch(searchPeople(debouncedSearchQuery));
                setIsLoading(false);
            }, 300);

            return () => clearTimeout(searchDelayId);
        } else {
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
        const params = new URLSearchParams(location.search);
        params.set('page', page);
        navigate(`${location.pathname}?${params.toString()}`);
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
            <PeopleTilesList
                header={headerText}
                content={
                    actors.length > 0 && (
                        actors.map(({ id, name, profile_path }) => (
                            <Tile
                                key={id}
                                id={id}
                                image={profile_path}
                                title={name}
                                navigateTo={() => handleActorClick(id)}
                            />
                        ))
                    )
                }
            />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </Container>
    );
};

export default ActorsList;