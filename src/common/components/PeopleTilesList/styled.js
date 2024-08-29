import styled from "styled-components";

export const ListHeader = styled.header`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  grid-column: 1 / -1;
  margin: 8px 0px 32px;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    line-height: 34px;
    font-size: 28px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    line-height: 24px;
    font-size: 20px;
    margin: 8px 0px 12px;
  };
`;

export const ListSection = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    gap: 16px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  };
`;