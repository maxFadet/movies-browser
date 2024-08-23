import styled from "styled-components";

export const StyledGenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  margin: 0 0 8px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin: 6px 0 8px;
    gap: 8px;
  }
`;

export const Genre = styled.li`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;