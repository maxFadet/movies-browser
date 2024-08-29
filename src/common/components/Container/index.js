import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 1440px;
  width: 90%;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    margin: 40px auto;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin: 16px auto;
  };
`;