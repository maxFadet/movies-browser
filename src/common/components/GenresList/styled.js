import styled from "styled-components";

export const StyledGenresList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    gap: 16px;
    margin: 0px;
    padding-left: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        gap: 8px;
    };
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

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 10px;
        padding: 4px 8px;
    };
`;
