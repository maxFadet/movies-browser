import { DetailsTile } from "../../../../common/DetailsTile"
import { Tile } from "../../../../common/Tile";
import { GenresList } from "../../../../common/GenresList";
import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { MoviesTilesList } from "../../../../common/MoviesTilesList";
import { Rates } from "../../../../common/Rates";
import { useSelector } from "react-redux";
import { selectMovieCast, selectMovieCrew } from "../../slices/movieCreditsSlice";

export const MovieDetailsMainContent = () => {

    const movieCast = useSelector(selectMovieCast);
    const movieCrew = useSelector(selectMovieCrew);
    console.log(movieCrew);

    return (
        <>
            <DetailsTile
                extraContent={
                    <>
                        <GenresList />
                        <Rates />
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