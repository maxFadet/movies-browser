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
import { Error } from '../../../common/components/Error/index';

const ActorsList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const handleTileClick = useNavigationToPage();

    const { popularActor, totalPagesActor, error } = usePopularActors();
    const searchResults = useSelector(selectSearchPeople);
    const totalResults = useSelector(selectTotalResults);
    const currentSearchPage = useSelector(selectSearchCurrentPage);
    const totalPagesSearch = useSelector(selectSearchPeoplePages);
    const actorsList = popularActor.data;

    const [searchQuery, setSearchQuery] = useState("");
    const isSearching = searchQuery.length > 0;

    const totalPages = isSearching ? totalPagesSearch : totalPagesActor;
    const currentPage = isSearching ? currentSearchPage : parseInt(new URLSearchParams(location.search).get("page")) || 1;

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey) || "";
        const queryPage = Number(new URLSearchParams(location.search).get("page")) || 1;

        if (query !== searchQuery) {
            setSearchQuery(query);
            if (query) {
                dispatch(searchPeople({ query, page: queryPage }));
            } else {
                dispatch(resetSearchPeople());
            }
        }
    }, [location.search, searchQuery, dispatch]);

    const header = isSearching
        ? `Search results for “${searchQuery}”${totalResults > 0 ? ` (${totalResults.toLocaleString()})` : ''}`
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
    if (error) {
        return <Error message="An error occurred while fetching data. Please try again later." />;
    }

    if (isSearching && (!peoplesToDisplay || peoplesToDisplay.length === 0)) {
        return <NoResults query={searchQuery} />;
    }

    return (
        <Container>
            <PeopleTilesList
                header={header}
                content={
                    peoplesToDisplay.map((actor) => (
                        <Tile
                            key={actor.id}
                            id={actor.id}
                            image={actor.profile_path}
                            title={actor.original_name}
                            navigateTo={() => handleTileClick(toPerson, actor.id)}
                        />
                    ))
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