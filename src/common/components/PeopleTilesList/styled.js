import styled from "styled-components";

export const ListHeader = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  grid-column: 1 / -1;
  margin: 0px;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    line-height: 34px;
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    line-height: 24px;
    font-size: 20px;
  }
`;

export const ListSection = styled.ul`
    display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  gap: 24px;
  justify-content: center;
  padding: 0;
  margin: 32px 0 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    gap: 20px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 16px;
    margin: 24px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 12px;
    margin: 12px 0 21px;
  }
`;