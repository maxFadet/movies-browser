import { StyledHeader, MenuItem, LogoContainer, SearchContainer, LogoTitle } from "./styled";
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
                <MenuItem to={toMoviesList()}>MOVIES</MenuItem>
                <MenuItem to={toMoviesList()}>PEOPLE</MenuItem>
                <SearchContainer>
                    <SearchIcon />
                </SearchContainer>
            </StyledHeader>
        </nav>
    );
}