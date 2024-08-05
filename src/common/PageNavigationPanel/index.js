import { ReactComponent as SearchIcon } from "./Icons/Search.svg";
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

export const PageNavigationPanel = () => {
    return (
        <StyledPageHeader>
            <HeaderContainer>
                <HeaderContent>
                    <StyledMovieBrowserIcon />
                    <Header>Movie Browser</Header>
                </HeaderContent>
                <Navigation>
                    <NavigationList>
                        <NavigationItem>
                            Movies
                        </NavigationItem>
                        <NavigationItem>
                            People
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
    );
}