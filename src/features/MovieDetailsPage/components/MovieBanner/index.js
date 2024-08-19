import { useSelector } from "react-redux";
import { Rates } from "../../../../common/Rates";
import { StyledMovieBanner, Title, MainInfo, } from "./styled";
import { selectMovieDetails, } from "../../slices/movieDetailsSlice";

export const MovieBanner = () => {
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count
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
        </>
    );
};