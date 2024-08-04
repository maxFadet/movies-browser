import styled from "styled-components";

export const StyledTile = styled.article`
    box-shadow: 0px 4px 12px 0px  
        ${({ theme }) => theme.colors.brightHeather};
    background-color: ${({ theme }) => theme.colors.white};
`;