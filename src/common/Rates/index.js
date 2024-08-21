import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
} from "./styled";

export const Rates = ({ mainInfo, hideTotalScore, voteAverage, voteCount }) => {
    const isRatesAreMainInfo = !!mainInfo;
    const isTotalScoreHidden = !!hideTotalScore;
    
    return (
        <StyledRates $larger={isRatesAreMainInfo}>
            {
                voteCount ?
                    <>
                        <StyledStarIcon $larger={isRatesAreMainInfo} />
                        <Score $larger={isRatesAreMainInfo}>
                            {Number(voteAverage).toFixed(1).replace('.', ',')}
                            <TotalScore $hideTotalScore={isTotalScoreHidden} $larger={isRatesAreMainInfo}>/ 10</TotalScore>
                        </Score>
                        <Votes $larger={isRatesAreMainInfo}>
                            {Number(voteCount).toLocaleString().replace(/,/g, ',')} votes
                        </Votes>
                    </> :
                    <>No votes yet</>
            }
        </StyledRates>
    )
};