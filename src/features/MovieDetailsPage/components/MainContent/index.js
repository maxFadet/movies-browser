import { MovieDetailsTile } from "./MovieDetailsTile";
import { Tile } from "../../../../common/components/Tile";
import { PeopleTilesList } from "../../../../common/components/PeopleTilesList";
import { Rates } from "../../../../common/components/Rates/components";
import { useSelector } from "react-redux";
import { selectMovieCreddits } from "../../slices/moviesCredditsListSlice";
import { selectMovieDetails } from "../../slices/movieDetailsSlice";
import { MovieBanner } from "../../components/MainContent/MovieBanner";
import { Container } from "../../../../common/components/Container";
import { GenresList } from "../../../../common/components/GenresList";

export const MainContent = () => {
    const { cast, crew } = useSelector(selectMovieCreddits);
    const { vote_average, vote_count, genres } = useSelector(selectMovieDetails);

    return (
        <>
            <MovieBanner />
            <Container extra>
                <MovieDetailsTile
                    extraContent={
                        <>
                            <GenresList extra genresIds={genres.map(({ id }) => id)} />
                            <Rates voteAverage={vote_average} voteCount={vote_count} />
                        </>
                    }
                />
                {cast.length > 0 && (
                    <PeopleTilesList
                        header="Cast"
                        content={
                            cast.map(({ character, name, profile_path, id }) => (
                                <Tile
                                    id={id}
                                    image={profile_path}
                                    title={name}
                                    subInfo={character}
                                />
                            ))
                        }
                    />
                )}
                {crew.length > 0 && (
                    <PeopleTilesList
                        header="Crew"
                        content={
                            crew.map(({ job, name, profile_path, id }) => (
                                <Tile
                                    id={id}
                                    image={profile_path}
                                    title={name}
                                    subInfo={job}
                                />
                            ))
                        }
                    />
                )}
            </Container>
        </>
    );
};