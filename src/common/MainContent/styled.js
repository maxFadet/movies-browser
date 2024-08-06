import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-gap: 64px;
    justify-content: center;

   @media (max-width: 800px) {
   }

   @media (max-width: 450px) {
     grid-gap: 21px;
    };
`;