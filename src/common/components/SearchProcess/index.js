import { useEffect } from "react";
import { useQueryParameter } from '../Navigation/Search/useQueryParameter';
import { useFetchSearchResult } from './useFetchSearchResult';
import { useLocation } from 'react-router-dom';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { Container } from '../Container';
import { NoResults } from '../NoResultsPage';
import { Pagination } from '../Pagination';
import { Tile } from '../Tile';
import { errorStatus, loadingStatus } from '../../constants/requestStatuses';
import { Title } from './styled';
import { toPerson, toMovie } from "../../../routes";
import { useNavigationToPage } from '../../../useNavigation';
import { Rates } from '../Rates/components';
import { GenresList } from '../GenresList';
import { MoviesTilesList } from '../MoviesTilesList';
import { PeopleTilesList } from '../PeopleTilesList';
import { getYear } from '../../functions/getYear';
import { useDispatch } from 'react-redux';
import { fetchMoviesGenres } from '../../slices/moviesGenresSlice';

const SearchProcess = () => {
    const query = useQueryParameter("query");
    const dispatch = useDispatch();
    const currentLocation = useLocation();
    const isMovieSearch = currentLocation.pathname.startsWith("/movies");

    const { searchResults } = useFetchSearchResult();
    const { status, data } = searchResults;
    const searchAmount = data?.total_results;
    const searchList = data?.results || [];

    const handleTileClick = useNavigationToPage();

    useEffect(() => {
        dispatch(fetchMoviesGenres());
    }, [dispatch]);

    const renderTilesList = () => {
        if (isMovieSearch) {
            return (
                <MoviesTilesList
                    content={searchList.map(({ id, title, poster_path, release_date, vote_average, vote_count, genre_ids }) => (
                        <Tile
                            key={id}
                            navigateTo={() => handleTileClick(toMovie, id)}
                            id={id}
                            image={poster_path}
                            title={title}
                            subInfo={getYear(release_date)}
                            extraContent={
                                <>
                                    <GenresList genresIds={genre_ids} />
                                    <Rates voteAverage={vote_average} voteCount={vote_count} hideTotalScore={true} />
                                </>
                            }
                        />
                    ))}
                />
            );
        }

        return (
            <PeopleTilesList
                content={searchList.map((actor) => (
                    <Tile
                        key={actor.id}
                        id={actor.id}
                        image={actor.profile_path}
                        title={actor.original_name}
                        navigateTo={() => handleTileClick(toPerson, actor.id)}
                    />
                ))}
            />
        );
    };

    if (status === loadingStatus)
        return <Container><Title>Search results for "{query}"</Title><Loader showText={false} /></Container>;

    if (status === errorStatus)
        return <Error />;

    if (searchAmount === 0)
        return <NoResults />;

    return (
        <Container>
            <Title>Search results for "{query}" ({searchAmount})</Title>
            {renderTilesList()}
            <Pagination />
        </Container>
    );
};

export default SearchProcess;