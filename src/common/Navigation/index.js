import {
    StyledPageHeader,
    HeaderContent,
    StyledMovieBrowserIcon,
    NavigationList,
    HeaderContainer,
    Navigation,
    Header,
    NavigationItem,
    Search,
    Input
} from "./styled";
import { ReactComponent as SearchIcon } from "./Icons/Search.svg";
import { toMoviesList, toActorsList } from "../../routes";

export default () => {
    return (
        <nav>
            <StyledPageHeader>
                <HeaderContainer>
                    <HeaderContent>
                        <StyledMovieBrowserIcon />
                        <Header>Movie Browser</Header>
                    </HeaderContent>
                    <Navigation>
                        <NavigationList>
                            <NavigationItem to={toMoviesList()}>
                                MOVIES
                            </NavigationItem>
                            <NavigationItem to={toActorsList()}>
                                PEOPLE
                            </NavigationItem>
                        </NavigationList>
                    </Navigation>
                </HeaderContainer>
                <Search>
                    <SearchIcon />
                    <Input
                        placeholder="Search for movies..."
                    />
                </Search>
            </StyledPageHeader>
        </nav>
    );
}