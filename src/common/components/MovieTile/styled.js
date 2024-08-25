import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from '../../image/Vector.svg';
import noImage from './Video.svg';

export const StyledTile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  position: relative;
  gap: 16px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    flex-direction: row;
  }
`;

export const MoviePoster = styled.img`
  border-radius: 5px;
  width: 100%;

  ${({ $placeholderPoster }) => $placeholderPoster && css`
        padding-top: calc(100% * 434 / 292);
        background-image: url("${noImage}");
        background-color: ${({ theme }) => theme.colors.silver};
        background-size: 32%;
        background-position: center;
        background-repeat: no-repeat;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 114px;
    height: 169px;
    padding-top: unset;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const MovieTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 16px;
    line-height: 21px;
    margin: 0;
  }
`;

export const MovieSubTitle = styled.div`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 13px;
    margin-bottom: 0;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-top: 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    gap: 8px;
  }
`;

export const VoteCount = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RatingNumber = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RatingStar = styled(StarIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 16px;
    height: 16px;
  }
`;