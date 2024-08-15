import styled from "styled-components";

export const StyledTileList = styled.section`
    display: grid;
    grid-gap: 32px;

    @media (max-width: 450px) {
        grid-gap: 12px;
    };
`;

export const ListHeader = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 20px;
    };
`;

export const ListSection = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 24px;

   padding-left: 0px;
`;