import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
    StyledRatesOfMovieBanner,
    StyledStarIconOfMovieBanner,
    ScoreOfMovieBanner,
    TotalScoreOfMovieBanner,
    VotesOfMovieBanner,
    TotalScoreHidden,
    NoVotes,
    NoVotesOfMovieBanner
} from "./styled";

export const Rates = ({ useMovieBannerLayout, hideTotalScore, voteAverage, voteCount }) => {

    const StyledRatesComponent = useMovieBannerLayout ? StyledRatesOfMovieBanner : StyledRates;
    const StyledStarIconComponent = useMovieBannerLayout ? StyledStarIconOfMovieBanner : StyledStarIcon;
    const ScoreComponent = useMovieBannerLayout ? ScoreOfMovieBanner : Score;
    const TotalScoreComponent = useMovieBannerLayout ? TotalScoreOfMovieBanner : TotalScore;
    const VotesComponent = useMovieBannerLayout ? VotesOfMovieBanner : Votes;
    const NoVotesComponent = useMovieBannerLayout ? NoVotesOfMovieBanner : NoVotes;
    const TotalScoreWrapper = hideTotalScore ? TotalScoreHidden : TotalScoreComponent;

    const ratesContentElement = voteCount ? (
        <>
            <StyledStarIconComponent />
            <ScoreComponent>
                {Number(voteAverage).toFixed(1).replace('.', ',')}
                <TotalScoreWrapper>/ 10</TotalScoreWrapper>
            </ScoreComponent>
            <VotesComponent>
                {Number(voteCount).toLocaleString().replace(/,/g, ',')} votes
            </VotesComponent>
        </>
    ) : (
        <NoVotesComponent>No votes yet</NoVotesComponent>
    );

    return (
        <StyledRatesComponent>
            {ratesContentElement}
        </StyledRatesComponent>
    );
};