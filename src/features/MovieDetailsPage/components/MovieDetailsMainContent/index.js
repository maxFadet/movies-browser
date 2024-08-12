import { DetailsTile } from "../../../../common/DetailsTile"
import { Tile } from "../../../../common/Tile";
import { GenresList } from "../../../../common/GenresList";
import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { MoviesTilesList } from "../../../../common/MoviesTilesList";
import { Rates } from "../../../../common/Rates";
import { useSelector } from "react-redux";
import { selectMovieCast, selectMovieCrew } from "../../slices/movieCreditsSlice";
import { selectMovieDetailsById } from "../../slices/moviesDetailsListSlice";
import { useParams } from "react-router-dom";

export const MovieDetailsMainContent = () => {
    const { id } = useParams()
    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);

    const { genres, vote_average, vote_count } = useSelector(state => selectMovieDetailsById(state, id));
    return (
        <>
            <DetailsTile
                extraContent={
                    <>
                        <GenresList genres={genres} />
                        <Rates voteAverage={vote_average} voteCount={vote_count} />
                    </>
                }
            />
            <PeopleTilesList
                header="Cast"
                content={
                    <>
                        {
                            movieCast.map(({ character, name, profile_path, id }) => (
                                <Tile
                                    id={id}
                                    image={profile_path}
                                    title={name}
                                    subInfo={character}
                                />
                            ))
                        }
                    </>
                }
            />
            <PeopleTilesList
                header="Crew"
                content={
                    <>
                        {
                            movieCrew.map(({
                                job, name, profile_path, id
                            }) => (
                                <Tile
                                    id={id}
                                    image={profile_path}
                                    title={name}
                                    subInfo={job}
                                />
                            ))
                        }
                    </>
                }
            />
            <MoviesTilesList
                header="Popular movies"
                content={
                    <>
                        <Tile
                            image="https://media.themoviedb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                            title="Dune"
                            subInfo="2020"
                            extraContent={
                                <>
                                    <GenresList />
                                    <Rates />
                                </>
                            }
                        />
                        <Tile
                            image="https://media.themoviedb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                            title="Dune"
                            subInfo="2020"
                            extraContent={
                                <>
                                    <GenresList />
                                    <Rates />
                                </>
                            }
                        />
                    </>
                }
            />
        </>
    )
}