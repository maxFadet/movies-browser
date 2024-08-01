import { ReactComponent as MovieBrowserIcon } from "./Video.svg";
import { ReactComponent as SearchIcon } from "./Search.svg";
import { Wrapper } from "./styled";

export const NavigationBar = () => {
    return (
        <Wrapper>
            <header>
                <h1>Movie Browser</h1>
                <MovieBrowserIcon />
            </header>
            <nav>
                <ul>
                    <li>Movies</li>
                    <li>People</li>
                </ul>
            </nav>
            <div>
                <SearchIcon />
                <input />
            </div>
        </Wrapper>
    );
}