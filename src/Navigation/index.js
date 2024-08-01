import { StyledHeader, MenuItem, LogoContainer } from "./styled";
import { toMoviesList } from "../routes";
import { Logo } from "./logoIcon";

export default () => {
    return (
        <nav>
            <StyledHeader>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <MenuItem to={toMoviesList()}>MOVIES</MenuItem>
                <MenuItem to={toMoviesList()}>PEOPLE</MenuItem>
            </StyledHeader>
        </nav>
    );
}