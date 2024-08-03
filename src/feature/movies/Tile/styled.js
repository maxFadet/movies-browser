import styled from "styled-components";

export const TileStyled = styled.article`
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

 export const GenreContainer = styled.div`
    
 `;

 export const Genre = styled.h2`
    
 `;
 
 export const RatingContainer = styled.div`
    
 `;
 
 export const Star = styled.svg`
    
 `;

export const Rating = styled.input`

`;

export const Votes = styled.input`

`;