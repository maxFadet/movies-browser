import {
    StyledPageHeader,
    NavigationList,
    NavigationContainer,
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

const Navigation = () => {
    const location = useLocation();
    const placeholderText = getPlaceholderText(location.pathname);

    return (
        <nav>
            <StyledPageHeader>
                <NavigationContainer>
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
                </NavigationContainer>
                <Search>
                    <StyledSearchIcon />
                    <Input
                        placeholder={placeholderText}
                    />
                </Search>
            </StyledPageHeader>
        </nav>
    );
};

export default Navigation;