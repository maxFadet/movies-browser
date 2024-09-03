import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
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
import { usePopularActors } from './usePopularActors';

const ActorsList = () => {
    const handleTileClick = useNavigationToPage();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { popularActor, totalPagesActor } = usePopularActors();
    const searchResults = useSelector(selectSearchPeople);
    const totalResults = useSelector(selectTotalResults);

    const currentSearchPage = useSelector(selectSearchCurrentPage);
    const totalPagesSearch = useSelector(selectSearchPeoplePages);

    const [searchQuery, setSearchQuery] = useState("");
    const isSearching = searchQuery.length > 0;

    const totalPages = isSearching ? totalPagesSearch : totalPagesActor;
    const currentPage = isSearching ? currentSearchPage : parseInt(new URLSearchParams(location.search).get("page")) || 1;

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
        const queryPage = Number(new URLSearchParams(location.search).get("page")) || 1;

        if (query && query !== searchQuery) {
            setSearchQuery(query);
            dispatch(searchPeople({ query, page: queryPage }));
        }
    }, [location.search, searchQuery, dispatch]);

    useEffect(() => {
        if (!location.search.includes(queryKey)) {
            setSearchQuery("");
            dispatch(resetSearchPeople());
        }
    }, [location.search, dispatch]);

    const header = isSearching
        ? totalResults > 0
            ? `Search results for “${searchQuery}” (${totalResults.toLocaleString()})`
            : `Search results for “${searchQuery}”`
        : "Popular people";

    const peoplesToDisplay = isSearching ? searchResults : popularActor.data;

    const handlePageChange = (page) => {
        if (isSearching) {
            navigate(`?${queryKey}=${searchQuery}&page=${page}`);
            dispatch(searchPeople({ query: searchQuery, page }));
        } else {
            navigate(`?page=${page}`);
        }
    };

    if (popularActor.status === "loading") {
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