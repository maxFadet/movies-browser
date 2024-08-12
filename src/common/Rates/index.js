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
            <>
                {
                    (voteAverage && voteCount) && (
                        <>
                            <Score $larger={isRatesAreMainInfo}>
                                {Number(voteAverage).toFixed(1)}
                                <TotalScore $larger={isRatesAreMainInfo}>
                                    /10
                                </TotalScore>
                            </Score>
                            <Votes $larger={isRatesAreMainInfo}>{Number(voteCount)} votes</Votes>
                        </>
                    )
                }
            </>
        </StyledRates>
    )
};