import styled from "styled-components";

export const StyledPageContent = styled.div`
    width: 80%;
    display: grid;
    grid-gap: 64px;
    margin: 56px auto;


    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
        width: 90%;
        margin: 24px auto;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        grid-gap: 21px;
    };
`;