import styled from "styled-components";

export const TileContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 24px;
  justify-content: space-between;

`;
