import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-wrap: wrap;    
    align-items: center;
    justify-content: space-around;
    max-width: 1920px;
    min-height: 94px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        min-height: 142px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;


    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 0;
    }
`;

export const LogoTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 12px;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin-bottom: 0;
        order: 3;
    }
`;

export const MenuItem = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 600;
    margin: 23px;
    margin-right: 16px;
    
    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.white};
        margin: 24px 13.5px;
    }`;

    export const SearchContainer = styled.div`
    display: flex;
    flex-wrap: wrap;    
    margin: -8px;     
    padding: 12px;
    padding-left: 24px;
    max-width: 432px;
    min-width: 288px;
    max-height: 48px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 33px;


    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        order: 3;
        margin-bottom: 16px;
        width: auto;
    }
`;

export const SearchInput =styled.input`
    border: none;
    margin-left: 16px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
`;   