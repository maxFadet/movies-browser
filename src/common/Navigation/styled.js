import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as MovieBrowserIcon } from "./Icons/Video.svg";

const activeClassName = "link-active";


export const StyledPageHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 23px 0;
    color:  ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    
    @media (max-width: 800px) {
        gap: 24px;
        justify-content: center;
    };
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 80px;

    @media (max-width: 550px) {
        gap: 20px;
    };
`;

export const HeaderContent = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Header = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin: 0;

    @media (max-width: 550px) {
        font-size: 13px;
    };
`;

export const StyledMovieBrowserIcon = styled(MovieBrowserIcon)`
     @media (max-width: 400px) {
       width: 13px;
    };
`;

export const Navigation = styled.nav`
`;

export const NavigationList = styled.ul`
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding-left: 0px;

    @media (max-width: 550px) {
        gap: 12px;
    };
`;

export const NavigationItem = styled(NavLink).attrs(() => ({
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

export const Search = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px 24px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 800px) {
        flex-basis: 60%;
    };

    @media (max-width: 550px) {
        padding: 14px 16px;
    };
`;

export const Input = styled.input`
    border: none;
    background-color: unset;

    &:focus-visible{
        outline: none;
    }
`;