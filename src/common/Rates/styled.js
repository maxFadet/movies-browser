import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from './Star.svg';

export const StyledRates = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        margin-top: 8px;
        gap: 8px;
    }
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
      width: 21px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      width: 16px;
  };

  ${({ $larger }) => $larger && css`
      width: 40px;
  `};
`;

export const Score = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 13px;
    }

    ${({ $larger }) => $larger && css`
        font-size: 30px;
    `};
`;

export const TotalScore = styled.span`
    font-size: 14px;
    padding: 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        display: none;
    }

    ${({ $hideTotalScore }) => $hideTotalScore && css`
        display: none;
    `}

    ${({ $larger }) => $larger && css`
        font-size: 16px;
    `};
`;

export const Votes = styled.p`
    font-size: 16px;
    margin: 0;
    color: ${({ theme }) => theme.colors.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 13px;
    }

    ${({ $larger }) => $larger && css`
        font-size: 16px;
        color: ${({ theme }) => theme.colors.white};
    `};
`;