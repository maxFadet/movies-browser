import styled, { css } from "styled-components";
import noImage from '../../image/noImage.svg';

export const StyledTile = styled.div`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px;
  gap: 12px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    padding: 8px;
    gap: 8px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.woodsmoke};
  margin: 0;
  line-height: 29px;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: 18px;
    line-height: 22px;
}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    line-height: 18px;
}
`;

export const Photo = styled.img`
  width: 100%;
  border-radius: 5px;

  ${({ $placeholderPhoto }) => $placeholderPhoto && css`
    padding-top: calc(100% * 264 / 177);
    background-image: url("${noImage}");
    background-color: ${({ theme }) => theme.colors.silver};
    background-size: 32%;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const SubName = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: 15px;
    line-height: 22px;
}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 13px;
    line-height: 17px;
}
`;

export const Info = styled.section`
  text-align: center;
  word-break: break-word;
`;