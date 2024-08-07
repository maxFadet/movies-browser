import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./Star.svg";

export const StyledRates = styled.div`
    display: grid;
    grid-template-areas: 
        "star score"
        "votes votes";
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: start;
    grid-gap: 16px;

    @media (max-width: 750px) {
      grid-gap: 12px;
    };

    @media (max-width: 450px) {
      grid-template-areas: 
          "star score votes";
      grid-gap: 8px;
      align-items: center;
    };

    ${({ $larger }) => $larger && css`
      grid-template-areas: 
          "star score votes";
      grid-gap: 8px;
      align-items: center;
      
      @media (max-width: 450px) {
        grid-gap: 8px;
      };
    `};
`;

export const Score = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    grid-area: score;
    align-self: center;

    @media (max-width: 750px) {
      font-size: 24px;
    };

    @media (max-width: 450px) {
        font-size: 13px;
        font-weight: 600;
      };

    ${({ $larger }) => $larger && css`
      font-size: 22px;

      @media (max-width: 450px) {
        font-size: 13px;
        font-weight: 600;
      };
    `};
`;

export const StyledStarIcon = styled(StarIcon)`
  grid-area: star;

  @media (max-width: 750px) {
    width: 30px;
  };

  @media (max-width: 450px) {
      width: 16px;
  };

  ${({ $larger }) => $larger && css`
      width: 24px;
  `};
`;

export const TotalScore = styled.span`
    font-size: 16px;
    font-weight: 400;
    padding: 8px;

    @media (max-width: 450px) {
      font-size: 14px;
      padding: 6px;
    };

    ${({ $larger }) => $larger && css`
      font-size: 14px;

      @media (max-width: 450px) {
        display: none;
      };
    `};
`;

export const Votes = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  grid-area: votes;

  @media (max-width: 450px) {
      font-size: 13px;
    };

  ${({ $larger }) => $larger && css`
    font-size: 14px;

    @media (max-width: 450px) {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.waterloo};
    };
  `};
`;