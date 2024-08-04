import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./Star.svg";

export const StyledRates = styled.div`
    display: grid;
    grid-template-areas: 
        "star score"
        "votes votes";
    grid-template-columns: repeat(2, auto);
    align-items: end;
    justify-content: start;
    grid-gap: 16px;

    @media (max-width: 700px) {
      grid-template-areas: 
          "star score votes";
      grid-gap: 12px;
      align-items: center;
    };

    ${({ $smaller }) => $smaller && css`
      @media (max-width: 700px) {
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

    ${({ $smaller }) => $smaller && css`
      font-size: 22px;

      @media (max-width: 700px) {
        font-size: 13px;
        font-weight: 600;
      };
    `};
`;

export const StyledStarIcon = styled(StarIcon)`
  grid-area: star;

  ${({ $smaller }) => $smaller && css`
      width: 24px;
    `};
`;

export const TotalScore = styled.span`
    font-size: 16px;
    font-weight: 400;
    padding: 8px;

    ${({ $smaller }) => $smaller && css`
      font-size: 14px;

      @media (max-width: 700px) {
        display: none;
      };
    `};
`;

export const Votes = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  grid-area: votes;

  ${({ $smaller }) => $smaller && css`
    font-size: 14px;

    @media (max-width: 700px) {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.darkerGray};
    };
  `};
`;