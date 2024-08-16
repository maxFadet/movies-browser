import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./Star.svg";

export const StyledRates = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: 
      "star score votes";
    grid-gap: 16px 8px;
    
    align-items: center;
    justify-content: start;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
      grid-template-areas: 
          "star score votes";
      grid-gap: 8px;
    };

    ${({ $larger }) => $larger && css`
      grid-template-areas: 
        "star score"
        "votes votes";
      
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        grid-gap: 4px;
      };
    `};
`;

export const StyledStarIcon = styled(StarIcon)`
  grid-area: star;
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      width: 16px;
  };

  ${({ $larger }) => $larger && css`
      width: 40px;
  `};
`;

export const Score = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    grid-area: score;
    align-self: center;

    @media (max-width: 750px) {
      font-size: 18px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 13px;
        font-weight: 600;
      };

    ${({ $larger }) => $larger && css`
      font-size: 30px;

      @media (max-width: 750px) {
        font-size: 24px;
      };

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 14px;
      };
    `};
`;

export const TotalScore = styled.span`
    font-size: 14px;
    font-weight: 400;
    padding: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      display: none;
    };

    ${({ $hideTotalScore }) => $hideTotalScore && css`
      display: none;
    `};

    ${({ $larger }) => $larger && css`
      font-size: 16px;
      padding: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 10px;
        padding: 4px;
        display: unset;
      };
    `};
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  grid-area: votes;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.waterloo};
    };

  ${({ $larger }) => $larger && css`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      font-size: 10px;
      color: ${({ theme }) => theme.colors.white};
    };
  `};
`;