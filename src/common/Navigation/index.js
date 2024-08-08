import {
    StyledPageHeader,
    NavigationList,
    Navigation,
    NavigationItem,
    Search,
    Input,
    NavigationLogo,
    NavigationTitle,
    NavigationLogoIcon,
    StyledSearchIcon,
} from "./styled";
import { toMoviesList, toActorsList } from "../../routes";

export default () => {
    return (
        <nav>
            <StyledPageHeader>
                <Navigation>
                    <NavigationLogo to={toMoviesList()}>
                        <NavigationLogoIcon />
                        <NavigationTitle>Movies Browser</NavigationTitle>
                    </NavigationLogo>
                    <NavigationList>
                        <NavigationItem to={toMoviesList()}>
                            MOVIES
                        </NavigationItem>
                        <NavigationItem to={toActorsList()}>
                            PEOPLE
                        </NavigationItem>
                    </NavigationList>
                </Navigation>
                <Search>
                    <StyledSearchIcon />
                    <Input
                        placeholder="Search for movies..."
                    />
                </Search>
            </StyledPageHeader>
        </nav>
    );
}