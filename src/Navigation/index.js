import { StyledHeader, MenuItem, LogoContainer, SearchContainer, LogoTitle, SearchInput, MenuContainer } from "./styled";
import { toMoviesList } from "../routes";
import { LogoIcon } from "./logoIcon";
import { SearchIcon } from "./searchIcon";

export default () => {
    return (
        <nav>
            <StyledHeader>
                <LogoContainer>
                    <LogoIcon />
                    <LogoTitle>
                        Movies Browser
                    </LogoTitle>
                </LogoContainer>
                <MenuContainer>
                    <MenuItem to={toMoviesList()}>MOVIES</MenuItem>
                    <MenuItem to={toMoviesList()}>PEOPLE</MenuItem>
                </MenuContainer>
                <SearchContainer>
                    <SearchIcon />
                    <SearchInput placeholder="Search for movies..." />
                </SearchContainer>
            </StyledHeader>
        </nav>
    );
}