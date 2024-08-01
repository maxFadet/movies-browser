import styled from "styled-components";

export const StyledPageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color:  ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
`;