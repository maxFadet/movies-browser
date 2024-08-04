import { ReactComponent as MovieBrowserIcon } from "./Video.svg";
import { ReactComponent as SearchIcon } from "./Search.svg";
import { StyledPageHeader, HeaderContent, NavigationList, HeaderContainer, Navigation, Header, NavigationItem, Search, Input } from "./styled";

export const PagePanel = () => {
    return (
        <StyledPageHeader>
            <HeaderContainer>
                <HeaderContent>
                    <MovieBrowserIcon />
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