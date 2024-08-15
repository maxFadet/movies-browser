import { Search, StyledSearchIcon, Input } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { toMoviesList, toSearchMoviesResults, toSearchPeopleResults } from "../../routes";
import { useState } from "react";

const getPlaceholderText = (pathname) =>
    pathname === toMoviesList()
        ? 'Search for movies...'
        : 'Search for people...'
    ;

export default () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const placeholderText = getPlaceholderText(location.pathname);
    const isSearchingMovies = location.pathname === toMoviesList();


    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        if (event.key === 'Enter') {
            if (isSearchingMovies) {
                navigate(`${toSearchMoviesResults()}?search=${query}`);
            } else {
                navigate(`${toSearchPeopleResults()}?search=${query}`);
            }
        }
    };



    return (
        <Search>
            <StyledSearchIcon />
            <Input
                placeholder={placeholderText}
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleSearchSubmit}
            />
        </Search>
    );
};
