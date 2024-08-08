import styled from "styled-components";

export const StyledGenresList = styled.ul`
    margin: 0;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 475px) {
        gap: 8px;
    };
`;

export const Genre = styled.li`
   display: flex;
   align-items: center;
   flex-basis: 20%;
   background-color: ${({ theme }) => theme.colors.mystic};
   border-radius: 5px;
   font-size: 16px;
   font-weight: 400;
   padding: 8px 16px;
   list-style-type: none;
   text-align: center;

   @media (max-width: 475px) {
        font-size: 10px;
        padding: 4px 8px;
    };
`;
