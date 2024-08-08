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
import { useLocation } from "react-router-dom";


const getPlaceholderText = (pathname) =>
    pathname === toMoviesList()
        ? 'Search for movies...'
        : 'Search for people...'
    ;

export default () => {
    const location = useLocation();
    const placeholderText = getPlaceholderText(location.pathname);

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
                        placeholder={placeholderText}
                    />
                </Search>
            </StyledPageHeader>
        </nav>
    );
}