import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Star.svg";

export const StyledRates = styled.div`
    display: flex;
    gap: 12px;
    margin-top: auto;
    align-items: center;
    margin-bottom: -12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
      grid-template-areas: 
        "star score votes";
      grid-gap: 8px;
    };
`;

export const StyledRatesOfMovieBanner = styled(StyledRates)`
  grid-template-areas: 
    "star score"
    "votes votes";
      
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    grid-gap: 4px;
  };
`;

export const StyledStarIcon = styled(StarIcon)`
  grid-area: star;
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
      width: 21px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      width: 16px;
  };
`;

export const StyledStarIconOfMovieBanner = styled(StyledStarIcon)`
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    width: 21px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 16px;
  };
`;

export const Score = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    grid-area: score;
    align-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
        font-size: 13px;
        font-weight: 600;
      };
`;

export const ScoreOfMovieBanner = styled(Score)`
  font-size: 30px;

  @media (max-width: 750px) {
    font-size: 24px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 14px;
  };
`;

export const TotalScore = styled.span`
    font-size: 14px;
    font-weight: 400;
    padding: 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
      display: none;
      padding:  0 4px;
    };
`;

export const TotalScoreHidden = styled(TotalScore)`
  display: none;
`;

export const TotalScoreOfMovieBanner = styled(TotalScore)`
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 10px;
    padding:  0 4px;
    display: unset;
  };
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.waterloo};
  };
`;

export const NoVotes = styled(Votes)`

`;

export const VotesOfMovieBanner = styled(Votes)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.white};
  };
`;

export const NoVotesOfMovieBanner = styled(VotesOfMovieBanner)`
  grid-area:  unset;
`;