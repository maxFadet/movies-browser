import styled from "styled-components";

export const StyledPageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 23px 0;
    color:  ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 80px;
`;

export const HeaderContent = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Header = styled.h1`
    margin: 0;
`;

export const Navigation = styled.nav`

`;

export const NavigationList = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding-left: 0px;
`;

export const NavigationItem = styled.li`
   
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
    border: none;
    background-color: unset;
`;