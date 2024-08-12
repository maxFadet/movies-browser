import { useSelector } from "react-redux";
import { Rates } from "../../../../common/Rates";
import { StyledMovieBanner, Title, MainInfo, } from "./styled";
import { selectMovieDetailsById, } from "../../slices/moviesDetailsListSlice";
import { useParams } from "react-router-dom";

export const MovieBanner = () => {
    const { id } = useParams();
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count
    } = useSelector(state => selectMovieDetailsById(state, id));

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