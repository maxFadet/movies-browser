import { StyledHeader, MenuItem, LogoContainer, SearchContainer } from "./styled";
import { toMoviesList } from "../routes";
import { LogoIcon } from "./logoIcon";
import { SearchIcon } from "./searchIcon";

export default () => {
    return (
        <nav>
            <StyledHeader>
                <LogoContainer>
                    <LogoIcon />
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