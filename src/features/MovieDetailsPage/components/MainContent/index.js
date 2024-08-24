import { DetailsTile } from "../../../../common/components/DetailsTile"
import { Tile } from "../../../../common/components/Tile";
import { GenresList } from "../../../../common/components/GenresList";
import { PeopleTilesList } from "../../../../common/components/PeopleTilesList";
import { Rates } from "../../../../common/components/Rates";
import { useSelector } from "react-redux";
import { selectMovieCreddits } from "../../slices/moviesCredditsListSlice";
import { selectMovieDetails } from "../../slices/movieDetailsSlice";
import { PageContent } from "../../../../common/components/PageContent";
import { BannerContent, MovieTitle, BannerMainInfo, Banner } from "./styled";
import { toPerson } from "../../../../routes";
import { useNavigationToPage } from "../../../../useNavigation";
import { getImageUrl } from "../../../../common/functions/getImageUrl";
import { BACKDROP_WIDTH } from "../../../../common/constants/config/BACKDROP__WIDTH";

export const MainContent = () => {
    const { cast, crew } = useSelector(selectMovieCreddits);
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count,
        genres,
    } = useSelector(selectMovieDetails);

    const handleTileClick = useNavigationToPage();

    return (
        <>
            <BannerContent>
                <Banner $backdrop={getImageUrl(backdrop_path, BACKDROP_WIDTH)}>
                    <BannerMainInfo>
                        <MovieTitle>{title}</MovieTitle>
                        <Rates
                            useMovieBannerLayout
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
                            cast.length > 0 && (
                                <PeopleTilesList
                                    header="Cast"
                                    content={
                                        <>
                                            {
                                                cast.map(({ character, name, profile_path, id }) => (
                                                    <Tile
                                                        navigateTo={() => handleTileClick(toPerson, id)}
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
                            crew.length > 0 && (
                                <PeopleTilesList
                                    header="Crew"
                                    content={
                                        <>
                                            {
                                                crew.map(({ job, name, profile_path, id }) => (
                                                    <Tile
                                                        navigateTo={() => handleTileClick(toPerson, id)}
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