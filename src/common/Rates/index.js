import { useSelector } from "react-redux";
import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
} from "./styled";
import { selectVoteAvarage, selectVoteCount } from "../../movieDetailsSlice";

export const Rates = ({ mainInfo }) => {
    const isRatesAreMainInfo = !mainInfo;

    const voteAverage = useSelector(selectVoteAvarage);
    const voteCount = useSelector(selectVoteCount);

    return (
        <StyledRates $larger={isRatesAreMainInfo}>
            <StyledStarIcon $larger={isRatesAreMainInfo} />
            <>
                <Score $larger={isRatesAreMainInfo}>
                    {voteAverage.toFixed(1)}
                    <TotalScore $larger={isRatesAreMainInfo}>
                        /10
                    </TotalScore>
                </Score>
                <Votes $larger={isRatesAreMainInfo}>{voteCount} votes</Votes>
            </>
        </StyledRates>
    )
}