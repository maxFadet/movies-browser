import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
} from "./styled";

export const Rates = ({ mainInfo }) => {
    const isRatesAreMainInfo = !mainInfo;

    return (
        <StyledRates $larger={isRatesAreMainInfo}>
            <StyledStarIcon $larger={isRatesAreMainInfo} />
            <Score $larger={isRatesAreMainInfo}>
                7,8
                <TotalScore $larger={isRatesAreMainInfo}>
                    /10
                </TotalScore>
            </Score>
            <Votes $larger={isRatesAreMainInfo}>335 votes</Votes>
        </StyledRates>
    )
}