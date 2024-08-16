import styled from "styled-components";

export const StyledPageContent = styled.div`
    width: 75%;
    display: grid;
    grid-gap: 64px;
    padding: 56px 0;
    margin: auto;

    @media (max-width: ${({theme}) => theme.breakpoints.tabletS}) {
        width: 90%;
        grid-gap: 21px;
        padding: 24px 0;
    };
`;