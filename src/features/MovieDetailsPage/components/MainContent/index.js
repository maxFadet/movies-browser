import { DetailsTile } from "../../../../common/DetailsTile"
import { Tile } from "../../../../common/Tile";
import { GenresList } from "../../../../common/GenresList";
import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { Rates } from "../../../../common/Rates";
import { useSelector } from "react-redux";
import { selectMovieCreddits } from "../../slices/moviesCredditsListSlice";
import { selectMovieDetails } from "../../slices/movieDetailsSlice";
import { PageContent } from "../../../../common/PageContent";
import { BannerContent, MovieTitle, BannerMainInfo, Banner } from "./styled";
import { useNavigate } from "react-router-dom";
import { toPerson } from "../../../../routes";

export const MainContent = () => {
    const { cast, crew } = useSelector(selectMovieCreddits);
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count,
        genres,
    } = useSelector(selectMovieDetails);

    const navigate = useNavigate();

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    return (
        <>
            <BannerContent>
                <Banner $backdrop={`https://image.tmdb.org/t/p/original${backdrop_path}`}>
                    <BannerMainInfo>
                        <MovieTitle>{title}</MovieTitle>
                        <Rates
                            mainInfo
                            voteAverage={vote_average}
                            voteCount={vote_count}
                        />
                    </BannerMainInfo>
                </Banner>
            </BannerContent>
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
                        {
                            cast && (
                                <PeopleTilesList
                                    header="Cast"
                                    content={
                                        <>
                                            {
                                                cast.map(({ character, name, profile_path, id }) => (
                                                    <Tile
                                                        navigateTo={() => handleActorClick(id)}
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
                            )
                        }
                        {
                            crew && (
                                <PeopleTilesList
                                    header="Crew"
                                    content={
                                        <>
                                            {
                                                crew.map(({ job, name, profile_path, id }) => (
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
                            )
                        }
                    </>
                }
            />
        </>
    )
};