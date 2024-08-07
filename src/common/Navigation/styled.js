import styled from "styled-components";
import { ReactComponent as MovieBrowserIcon } from "./Icons/Video.svg";
import { NavLink } from "react-router-dom";

export const NavigationHeader = styled.div`
    background-color: ${({ theme }) => theme.colors.black}; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;

`;

export const StyledPageHeader = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
// width: 78%;
background-color: ${({ theme }) => theme.colors.black}; 
color:  ${({ theme }) => theme.colors.white};
padding: 0 16px;
min-height: 94px;



@media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 0px;
};
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding-left: 17px;  
    gap: 80px;

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

export const StyledMovieBrowserIcon = styled(MovieBrowserIcon)`
     @media (max-width: 400px) {
       width: 17px;
    };
`;

export const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin: 0;

    @media (max-width: 925px) {
        font-size: 18px;
    };

    @media (max-width: 600px) {
        font-size: 13px;
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
    margin: 24px 0px;
    // margin-left: 0px;
    padding: 8px 24px;

    
    &.active {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
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
    padding: 12px;
    padding-right: 16px;
    margin: 23px;
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    background-color: ${({ theme }) => theme.colors.white};

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
