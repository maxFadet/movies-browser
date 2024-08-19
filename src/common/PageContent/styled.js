import styled from "styled-components";

export const StyledPageContent = styled.div`
    width: 85%;
    display: grid;
    grid-gap: 64px;
    margin: 56px auto;


    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        width: 90%;
        grid-gap: 21px;
        margin: 24px auto;
    };
`;