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
  color: ${({ theme }) => theme.colors.black}; /* Ustawia kolor czcionki */
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

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 292px;
    max-height: 434px;
  `;

export const TileHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 292px;
  max-height: 105px;
  padding: 16;
 `;

 export const TileTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  word-break: break-word;
  margin-bottom: 4px; 
 `;

 export const MovieYear = styled.h3`
  margin-top: 4px; 
  font-size: 16px;
  font-weight: 400;    
  color: ${({ theme }) => theme.colors.waterloo};
  word-break: break-word;
 `;

 export const TagsContainer = styled.div`
  width: 140px;
  height: 24px;
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

 export const RatingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;  
  margin-top: 39px; 
  padding: 16; 
  width: 140px;
  height: 24px;
 `;
 
export const Rating = styled.div`

`;

export const Votes = styled.div`

`;