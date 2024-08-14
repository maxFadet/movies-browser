import {
    StyledPageHeader,
    NavigationList,
    NavigationContainer,
    NavigationItem,
    NavigationLogo,
    NavigationTitle,
    NavigationLogoIcon,
} from "./styled";
import Search from "./Search";
import { toMoviesList, toActorsList } from "../routes";

const Navigation = () => {

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
                <Search />
            </StyledPageHeader>
        </nav>
    );
};

export default Navigation;