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

export const Rates = ({ useMovieBannerLayout, hideTotalScore, voteAverage, voteCount, extra }) => {

    const getStyledComponent = (movieBannerLayout, defaultComponent, movieBannerComponent) => 
        movieBannerLayout ? movieBannerComponent : defaultComponent;

    const StyledRatesComponent = getStyledComponent(useMovieBannerLayout, StyledRates, StyledRatesOfMovieBanner);
    const StyledStarIconComponent = getStyledComponent(useMovieBannerLayout, StyledStarIcon, StyledStarIconOfMovieBanner);
    const ScoreComponent = getStyledComponent(useMovieBannerLayout, Score, ScoreOfMovieBanner);
    const VotesComponent = getStyledComponent(useMovieBannerLayout, Votes, VotesOfMovieBanner);
    const NoVotesComponent = getStyledComponent(useMovieBannerLayout, NoVotes, NoVotesOfMovieBanner);
    const TotalScoreComponent = hideTotalScore ? TotalScoreHidden : getStyledComponent(useMovieBannerLayout, TotalScore, TotalScoreOfMovieBanner);

    const ratesContentElement = voteCount ? (
        <>
            <StyledStarIconComponent extra={extra} />
            <ScoreComponent extra={extra}>
                {Number(voteAverage).toFixed(1).replace('.', ',')}
                <TotalScoreComponent>/ 10</TotalScoreComponent>
            </ScoreComponent>
            <VotesComponent extra={extra}>
                {Number(voteCount).toLocaleString().replace(/,/g, ',')} {voteCount === 1 ? "vote" : "votes"}
            </VotesComponent>
        </>
    ) : (
        <NoVotesComponent extra={extra}>No votes yet</NoVotesComponent>
    );

    return (
        <StyledRatesComponent>
            {ratesContentElement}
        </StyledRatesComponent>
    );
};