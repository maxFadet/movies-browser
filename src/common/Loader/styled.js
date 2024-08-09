import styled, { keyframes } from "styled-components";
import { ReactComponent as Ellipse } from './Ellipse.svg';

export const Container = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 56px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const Image = styled(Ellipse)`
  animation: ${rotate} 1s linear infinite;
  width: 91px;
  height: 91px;
  margin: 120px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 65px;
    height: 65px;
    margin: 74px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 40px;
    height: 40px;
    margin: 24px 0 0;
  }
`;