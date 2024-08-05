import styled from "styled-components";

export const StyledTags = styled.ul`
    margin: 0;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-self: baseline;

    @media (max-width: 475px) {
        gap: 8px;
    };
`;

export const Tag = styled.li`
   background-color: ${({ theme }) => theme.colors.mystic};
   flex-basis: 20%;
   font-size: 16px;
   border-radius: 5px;
   font-weight: 400;
   padding: 8px 16px;
   list-style-type: none;
   text-align: center;

   @media (max-width: 475px) {
        font-size: 10px;
        padding: 4px 8px;
    };
`;
