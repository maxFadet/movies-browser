import styled from "styled-components";
import { ReactComponent as LogoIcon } from "./Icons/Video.svg";
import { ReactComponent as SearchIcon } from "./Icons/Search.svg";
import { NavLink } from "react-router-dom";

export const StyledPageHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.black}; 
    color:  ${({ theme }) => theme.colors.white};
    padding: 0 16px;
    min-height: 94px;

@media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
};
`;

export const NavigationContainer = styled.nav`
    display: flex;
    align-items: center;
    padding-left: 17px;  
    gap: 80px;

    @media (max-width: 768px) {
        gap: 60px;
        margin-bottom: -24px;
        margin-left: -12px;
        margin-right: 24px;
    };
`;

export const NavigationLogo = styled(NavLink)`
    display: flex;
    gap: 12px;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;

    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    };

    @media (max-width: 768px) {
        // flex-shrink: 0;
        justify-content: space-around;
    };
`;

export const NavigationLogoIcon = styled(LogoIcon)`
    max-width: 40px;

    @media (max-width: 550px) {
        max-width: 17px;
    }
`;

export const NavigationTitle = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    font-weight: 500;
    margin: 0;

    @media (max-width: 550px) {
        font-size: 13px;
    };

    &:hover,
    &:visited,
    &:active,
    &:focus {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    };
`;

export const NavigationList = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding-left: 0px;

    @media (max-width: 400px) {
        flex: 1;
        gap: 6px;
    };
`;

export const NavigationItem = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 600;
    margin: 24px 0px;
    // margin-left: 0px;
    padding: 8px 24px;

    
    &.active {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
        margin: 24px 0px;
    };

    @media (max-width: 550px) {
        font-size: 12px;
        padding: 12px;
    };
`;

export const Search = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px;
    padding-right: 16px;
    margin: 23px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 888px) {
        padding: 14px 16px;
        margin: 0;
        margin-top: 24px;
        margin-bottom: 16px;
    };

    @media (max-width: 888px) {
        width: 100%;
        flex-basis: 100%;
    };
`;

export const StyledSearchIcon = styled(SearchIcon) `
    max-width: 40px;

    @media (max-width: 550px) {
        max-width: 17px;
    };
`;


export const Input = styled.input`
    border: none;
    background-color: unset;
    font-size: 13px;

    &:focus-visible{
        outline: none;
    }
`;
