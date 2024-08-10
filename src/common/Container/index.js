import styled from "styled-components";

export const Container = styled.main`
  max-width: 1440px;
  width: 90%;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    margin: 40px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin: 24px auto;
  }
`;