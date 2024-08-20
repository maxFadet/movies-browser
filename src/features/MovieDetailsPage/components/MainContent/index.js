import { DetailsTile } from "../../../../common/DetailsTile"
import { Tile } from "../../../../common/Tile";
import { GenresList } from "../../../../common/GenresList";
import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { Rates } from "../../../../common/Rates";
import { useSelector } from "react-redux";
import { selectMovieCreddits } from "../../slices/moviesCredditsListSlice";
import { selectMovieDetails } from "../../slices/movieDetailsSlice";
import { PageContent } from "../../../../common/PageContent";
import { StyledMovieBanner, Title, MainInfo, } from "./styled";

export const MainContent = () => {
    const { cast, crew } = useSelector(selectMovieCreddits);
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count,
        genres,
    } = useSelector(selectMovieDetails);

    return (
        <>
            <StyledMovieBanner $backdrop={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
                <MainInfo>
                    <Title>{title}</Title>
                    <Rates
                        mainInfo
                        voteAverage={vote_average}
                        voteCount={vote_count}
                    />
                </MainInfo>
            </StyledMovieBanner>
            <PageContent
                content={
                    <>
                        <DetailsTile
                            extraContent={
                                <>
                                    <GenresList genresIds={genres.map(({ id }) => id)} />
                                    <Rates voteAverage={vote_average} voteCount={vote_count} />
                                </>
                            }
                        />
                        <PeopleTilesList
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
                    </>
                }
            />
        </>
    )
};