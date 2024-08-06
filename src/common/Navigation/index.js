import { StyledHeader, MenuItem, Logo, LogoContainer, SearchContainer, LogoTitle, SearchInput, MenuContainer } from "./styled";
import { toMoviesList, toActorsList } from "../../routes";
import { LogoIcon } from "./logoIcon";
import { SearchIcon } from "./searchIcon";

export default () => {
    return (
        <nav>
            <StyledHeader>
                <Logo>
                    <LogoContainer>
                        <LogoIcon />
                    </LogoContainer>
                    <LogoTitle>
                        Movies Browser
                    </LogoTitle>
                </Logo>
                <MenuContainer>
                    <MenuItem to={toMoviesList()}>MOVIES</MenuItem>
                    <MenuItem to={toActorsList()}>PEOPLE</MenuItem>
                </MenuContainer>
                <SearchContainer>
                    <SearchIcon />
                    <SearchInput placeholder="Search for movies..." />
                </SearchContainer>
            </StyledHeader>
        </nav>
    );
}