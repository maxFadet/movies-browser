import styled from "styled-components";

export const StyledGenresList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    gap: 16px;
    padding-left: 0px;

    @media (max-width: 450px) {
        gap: 8px;
    };

    /* margin: 0;
    padding-left: 0px;
    display: grid;
    grid-template-columns: repeat(2, 47%);
    gap: 16px;

    @media (max-width: 475px) {
        gap: 8px;
    }; */
`;

export const Genre = styled.li`
   display: flex;
   align-items: center;
   justify-items: center;
   background-color: ${({ theme }) => theme.colors.mystic};
   border-radius: 5px;
   font-size: 16px;
   font-weight: 400;
   padding: 8px 16px;
   list-style-type: none;

   @media (max-width: 500px) {
        font-size: 10px;
        padding: 4px 8px;
    };
`;
