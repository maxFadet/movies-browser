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
import { useDispatch } from "react-redux";
import { resetSearchMovies } from "../searchMoviesSlice";
import { resetSearchPeople } from "../searchActorSlice"; 

const Navigation = () => {
    const dispatch = useDispatch();

    const handleMoviesClick = () => {
        dispatch(resetSearchMovies()); 
    };

    const handlePeopleClick = () => {
        dispatch(resetSearchPeople()); 
    };
    
    return (
        <nav>
            <StyledPageHeader>
                <NavigationContainer>
                    <NavigationLogo to={toMoviesList()} onClick={handleMoviesClick}>
                        <NavigationLogoIcon />
                        <NavigationTitle>Movies Browser</NavigationTitle>
                    </NavigationLogo>
                    <NavigationList>
                        <NavigationItem to={toMoviesList()} onClick={handleMoviesClick}>
                            MOVIES
                        </NavigationItem>
                        <NavigationItem to={toActorsList()} onClick={handlePeopleClick}>
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