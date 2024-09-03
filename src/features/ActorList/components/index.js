import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import {
    selectPopularActors,
    setCurrentPage,
    selectCurrentPage as selectPopularCurrentPage,
    fetchActorsStart,
    selectTotalPages
} from '../slices/actorsSlice';
import {
    selectSearchPeople,
    selectTotalResults,
    selectCurrentPage as selectSearchCurrentPage,
    searchPeople,
    resetSearchPeople,
    selectTotalPages as selectSearchPeoplePages
} from '../../../common/slices/searchActorSlice';
import { Pagination } from "../../../common/components/Pagination";
import { Container } from "../../../common/components/Container";
import { Loader } from "../../../common/components/Loader";
import { Tile } from '../../../common/components/Tile';
import { toPerson } from "../../../routes";
import { NoResults } from '../../../common/components/NoResultsPage';
import { PeopleTilesList } from '../../../common/components/PeopleTilesList';
import { queryKey } from '../../../common/constants/queryKey';
import { useNavigationToPage } from '../../../useNavigation';

const ActorsList = () => {
    const handleTileClick = useNavigationToPage();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const searchResults = useSelector(selectSearchPeople);
    const totalResults = useSelector(selectTotalResults);
    const popularActors = useSelector(selectPopularActors);

    const currentPopularPage = useSelector(selectPopularCurrentPage);
    const currentSearchPage = useSelector(selectSearchCurrentPage);

    const totalPagesPopular = useSelector(selectTotalPages);
    const totalPagesSearch = useSelector(selectSearchPeoplePages);

    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning] = useState(false);

    const isSearching = searchQuery.length > 0;

    const totalPages = isSearching ? totalPagesSearch : totalPagesPopular;
    const currentPage = isSearching ? currentSearchPage : currentPopularPage;

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
        const queryPage = Number(new URLSearchParams(location.search).get("page")) || 1;

        setIsLoading(true);

        setTimeout(() => {
            if (query && query !== searchQuery) {
                setSearchQuery(query);
                dispatch(searchPeople({ query, page: queryPage }));
            } else if (queryPage !== currentPage || !popularActors.results.length) {
                dispatch(setCurrentPage(queryPage));
                dispatch(fetchActorsStart({ page: queryPage }));
            }
            setIsLoading(false);
        }, 1000);
    }, [location.search, searchQuery, currentPage, dispatch, popularActors.results.length]);

    const header = isSearching
        ? totalResults > 0
            ? `Search results for “${searchQuery}” (${totalResults.toLocaleString()})`
            : `Search results for “${searchQuery}”`
        : "Popular people";

    const peoplesToDisplay = isSearching ? searchResults : popularActors.results;

    const handlePageChange = (page) => {
        setIsLoading(true);
        setTimeout(() => {
            if (isSearching) {
                navigate(`?${queryKey}=${searchQuery}&page=${page}`);
                dispatch(searchPeople({ query: searchQuery, page }));
            } else {
                navigate(`?page=${page}`);
                dispatch(fetchActorsStart({ page }));
            }
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (!location.search.includes(queryKey)) {
            setSearchQuery("");
            dispatch(resetSearchPeople());
            dispatch(fetchActorsStart({ page: 1 }));
        }
    }, [location.search, dispatch]);

    if (isLoading || isTransitioning) {
        return <Loader showText={false} />;
    }

    if (isSearching && (!peoplesToDisplay || peoplesToDisplay.length === 0)) {
        return <NoResults query={searchQuery} />;
    }

    return (
        <Container>
            <PeopleTilesList
                header={header}
                content={
                    peoplesToDisplay && peoplesToDisplay.length > 0 && (
                        peoplesToDisplay.map(({ id, name, profile_path }) => (
                            <Tile
                                key={id}
                                id={id}
                                image={profile_path}
                                title={name}
                                navigateTo={() => handleTileClick(toPerson, id)}
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