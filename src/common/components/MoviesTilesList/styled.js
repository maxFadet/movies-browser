import styled from "styled-components";

export const StyledTileList = styled.section`
    display: grid;
    grid-gap: 32px;
    margin: 56px auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        grid-gap: 12px;
    };
`;

export const ListHeader = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
        font-size: 20px;
    };
`;

export const ListSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 320px);
    align-items: start;

    grid-gap: 24px;
    padding-left: 0px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        grid-template-columns: repeat(2, 0.5fr);
        grid-gap: 16px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
       grid-template-columns: 1fr;
    };
`;