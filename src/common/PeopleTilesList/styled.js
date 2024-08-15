import styled from "styled-components";

export const StyledTileList = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;

    @media (max-width: 450px) {
        grid-gap: 12px;
    };
`;

export const ListHeader = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: 450px) {
        font-size: 20px;
    };
`;

export const ListSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 23.1%);
    align-items: start;

    grid-gap: 24px;
    padding-left: 0px;
    margin: 0;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 31%);
    };

    @media (max-width: 950px) {
        grid-template-columns: repeat(2, 47%);
        justify-content: center;
        grid-gap: 16px;
    };
`;