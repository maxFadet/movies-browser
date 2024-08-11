import styled from "styled-components";

export const TileStyled = styled.article`
  display: grid;
  gap: 6px;
  max-width: 324px;
  max-height: 650px;
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    min-width: 228px;
    max-height: 201px;
    grid-template-columns: repeat(2, minmax(114px, 1fr));

  }
`;

export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16;
  background-color: ${({ theme }) => theme.colors.silver};
  max-width: 292px;
  height: 434px;
  border-radius: 5px;
  margin-bottom: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    max-width: 114px;
    max-height: 169px;
  }
  `;

 export const TileDescription = styled.div`
 display: flex;
 flex-direction: column;
 align-items: stretch; 
flex-grow: 1;
margin-top: -16px;
 `; 

export const TileHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 292px;
  max-height: 105px;
  padding: 16;
  margin-top: 0px;
  
 `;

 export const TileTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  word-break: break-word;
  margin-bottom: 4px; 
  word-break: break-word;

 `;

 export const MovieYear = styled.h3`
  margin-top: 4px; 
  font-size: 16px;
  font-weight: 400;    
  color: ${({ theme }) => theme.colors.waterloo};
 `;

 export const TagsContainer = styled.div`
  min-width: 140px;
  min-height: 24px;
  border: 1px solid red;
 `;

 export const Tags = styled.ul`
  list-style: none;
  padding-left: 0; 
  display: flex;
  flex-wrap: wrap;    
  margin: -8px; 
 `;
 
 export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  margin: 4px;
 `;

 export const RatingContainer = styled.ul`
  height: 24px;
  list-style: none;
  padding-left: 0; 
  display: flex;
  flex-wrap: wrap;    
  margin-top: 39px; 
 `;
 
export const Rating = styled.li`
padding-left: 8px;
font-size: 16px;
font-weight: 600;
margin: 4px;
`;

export const Votes = styled.li`
padding-left: 8px;
color: ${({ theme }) => theme.colors.waterloo};
margin-top: 4px;
`;