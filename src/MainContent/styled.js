import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-gap: 64px;
    grid-template-columns: 70%;
    justify-content: center;

   @media (max-width: 800px) {
        grid-template-columns: 90%;
   }
`;