import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
} from "./styled";

export const Rates = ({ mainInfo, voteAverage, voteCount }) => {
    const isRatesAreMainInfo = !mainInfo;

    return (
        <StyledRates $larger={isRatesAreMainInfo}>
            <StyledStarIcon $larger={isRatesAreMainInfo} />
            <Score $larger={isRatesAreMainInfo}>
                {voteAverage}
                <TotalScore $larger={isRatesAreMainInfo}>
                    /10
                </TotalScore>
            </Score>
            <Votes $larger={isRatesAreMainInfo}>{voteCount} votes</Votes>
        </StyledRates>
    )
}