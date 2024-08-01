import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 23px 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 220px,
    mah-height: 48px;
`;

export const LogoIcon = styled.svg`
    `

export const MenuItem = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
color: ${({ theme }) => theme.colors.white};
text-decoration: none;
    
    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.white};
    }`;