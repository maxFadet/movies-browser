import styled from "styled-components";

export const MoviesListContainer = styled.div`
  max-width: 1368px;
  display: grid;
  grid-template-columns:
  justify-content: center;
  margin: 0 auto;
  padding-top: 56px;

  // width: 100%;


`;

export const TileContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 24px;
  justify-content: space-between;    
  `;