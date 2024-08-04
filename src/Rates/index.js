import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
} from "./styled";

export const Rates = ({ details }) => {
    return (
        <StyledRates $smaller={details}>
            <StyledStarIcon $smaller={details} />
            <Score $smaller={details}>
                7,8
                <TotalScore $smaller={details}>
                    /10
                </TotalScore>
            </Score>
            <Votes $smaller={details}>335 votes</Votes>
        </StyledRates>
    )
}