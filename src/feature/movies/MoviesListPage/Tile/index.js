import styled from "styled-components";
export const Tile = styled.article`
    max-width: 650px;
    max-height: 324px;
    border-radius: 5px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;