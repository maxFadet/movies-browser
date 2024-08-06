import styled from "styled-components";
import { ReactComponent as MovieBrowserIcon } from "./Icons/Video.svg";
import { NavLink } from "react-router-dom";

export const StyledPageHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1920px;
    min-height: 94px;
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
    margin-bottom: -28px;

    @media (max-width: 550px) {
        gap: 20px;
        margin-bottom: -36px;
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
        margin-bottom: 0;
    };
`;

export const NavigationItem = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 600;
    margin: 23px;
    margin-right: 16px;
    padding: 24px;

    
    &.active {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 50px;
        margin: 24px 13.5px;
    }
    @media (max-width: 550px) {
        padding: 8px;

    };
`;

export const Search = styled.div`
    display: flex;
    flex-basis: 30%;
    align-items: center;
    gap: 16px;
    padding: 12px 24px;
    margin: 24px;
    margin-top: 0px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 50px;
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
