import { DetailsTile } from "../../../../common/DetailsTile"
import { Tile } from "../../../../common/Tile";
import { GenresList } from "../../../../common/GenresList";
import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { MoviesTilesList } from "../../../../common/MoviesTilesList";
import { Rates } from "../../../../common/Rates";
import { useSelector } from "react-redux";
import { selectCreditsById } from "../../slices/moviesCredditsListSlice";
import { selectMovieDetailsById } from "../../slices/moviesDetailsListSlice";
import { useURLId } from "../../../../useUrlId";

export const MovieDetailsMainContent = () => {
    const urlId = useURLId();

    // const { cast, crew } = useSelector(state => selectCreditsById(state, urlId));
    const { genres, vote_average, vote_count } = useSelector(state => selectMovieDetailsById(state, urlId));
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
            {/*  <PeopleTilesList
                header="Cast"
                content={
                    <>
                        {
                            cast.map(({ character, name, profile_path, id }) => (
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
                            crew.map(({
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
                                      <GenresList genres={genres} />
                                      <Rates voteAverage={vote_average} voteCount={vote_count} />
                                </>
                            }
                        />
                        <Tile
                            image="https://media.themoviedb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                            title="Dune"
                            subInfo="2020"
                            extraContent={
                                <>
                                  <GenresList genres={genres} />
                                  <Rates voteAverage={vote_average} voteCount={vote_count} />
                                </>
                            }
                        />
                    </>
                }
            /> */}
        </>
    )
}