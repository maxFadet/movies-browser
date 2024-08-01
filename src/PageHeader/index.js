import { ReactComponent as MovieBrowserIcon } from "./Video.svg";
import { ReactComponent as SearchIcon } from "./Search.svg";
import { StyledPageHeader } from "./styled";

export const PageHeader = () => {
    return (
        <StyledPageHeader>
            <header>
                <MovieBrowserIcon />
                <h1>Movie Browser</h1>
                <nav>
                    <ul>
                        <li>Movies</li>
                        <li>People</li>
                    </ul>
                </nav>
            </header>
            <div>
                <SearchIcon />
                <input />
            </div>
        </StyledPageHeader>
    );
}