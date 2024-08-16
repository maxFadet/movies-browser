import { useDispatch } from 'react-redux';
import { searchMovies } from '../../searchMoviesSlice';
import { Search, StyledSearchIcon, Input } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { toMoviesList, toActorsList } from "../../routes";
import { useState } from "react";

const getPlaceholderText = (pathname) =>
    pathname === toMoviesList()
        ? 'Search for movies...'
        : 'Search for people...'
    ;

export default () => {
    const dispatch = useDispatch();
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
                dispatch(searchMovies(query));
                navigate(`${toMoviesList()}?search=${query}`);
            } else {
                navigate(`${toActorsList()}?search=${query}`);
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
