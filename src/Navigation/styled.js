import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1920px;
    max-height: 94px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 220px,
    max-height: 48px;
`;

export const SearchContainer = styled.div`
    max-width: 432px;
    min-width: 288px;
    max-height: 48px;
    pading-left: 24px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 33px;
    `
export const SearchInput =styled.input`
    
`    

export const MenuItem = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color: ${({ theme }) => theme.colors.white};
text-decoration: none;
    
    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.white};
    }`;