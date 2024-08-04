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
   pading: 16;
   background-color: ${({ theme }) => theme.colors.silver};
   max-width: 292px;
   max-height: 434px;
   border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      max-width: 292px;
      max-height: 434px;
  `;

export const TileHeader = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 292px;
  max-height: 61px;
 `;

 export const TileTitle = styled.h2`
    
 `;

 export const MovieYear = styled.h2`
    
 `;

 export const TagsContainer = styled.div`
 width: 140px;
 height: 24px;
 border: 1px solid red;
 `;

 export const Tag = styled.h2`
    
 `;
 
 export const RatingContainer = styled.div`
  width: 140px;
  height: 24px;
  border: 1px solid red;
 `;
 
 export const Star = styled.svg`
    
 `;

export const Rating = styled.div`

`;

export const Votes = styled.div`

`;