import styled from "styled-components";

export const StyledTileList = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileL}) {
        grid-gap: 12px;
    };
`;

export const ListHeader = styled.header`
    font-size: 36px;
    font-weight: 600;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileL}) {
        font-size: 20px;
    };
`;

export const ListSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 182px);
    align-items: start;
    grid-gap: 24px;
    padding-left: 0px;
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
        grid-template-columns: repeat(auto-fill, 47%);
        grid-gap: 16px;
    };
`;