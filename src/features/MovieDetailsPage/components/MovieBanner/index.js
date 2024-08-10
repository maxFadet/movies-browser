import { useSelector } from "react-redux";
import { Rates } from "../../../../common/Rates";
import {
    StyledMovieBanner,
    Title,
    MainInfo,
} from "./styled";

import {
    selectMovieBanner,
    selectTitle,
    selectVoteAvarage,
    selectVoteCount
} from "../../slices/movieDetailsSlice";

export const MovieBanner = () => {
    const title = useSelector(selectTitle);
    const banner = useSelector(selectMovieBanner);

    const voteAverage = useSelector(selectVoteAvarage);
    const voteCount = useSelector(selectVoteCount);

    return (
        <StyledMovieBanner $poster={banner}>
            <MainInfo>
                <Title>{title}</Title>
                <Rates
                    mainInfo
                    voteAverage={voteAverage}
                    voteCount={voteCount}
                />
            </MainInfo>
        </StyledMovieBanner>
    );
};