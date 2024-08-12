import { useSelector } from "react-redux";
import { Rates } from "../../../../common/Rates";
import { StyledMovieBanner, Title, MainInfo, } from "./styled";
import { selectMovieDetailsById, } from "../../slices/moviesDetailsListSlice";
import { useURLId } from "../../../../useUrlId";

export const MovieBanner = () => {
    const urlId = useURLId();
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count
    } = useSelector(state => selectMovieDetailsById(state, urlId));

    return (
        <>
            <StyledMovieBanner $backdrop={backdrop_path}>
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