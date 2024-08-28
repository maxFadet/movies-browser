import { useDispatch } from 'react-redux';
import { searchMovies, setSearchResultsText } from '../../../slices/searchMoviesSlice';
import { searchPeople } from '../../../slices/searchActorSlice';
import { Search, StyledSearchIcon, Input } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import {
    toMoviesList,
    // toMovie, 
    toActorsList
} from "../../../../routes";
import { useState, useEffect } from "react";

const getPlaceholderText = (pathname) =>
    pathname.includes('/movies')
        ? 'Search for movies...'
        : 'Search for people...';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const placeholderText = getPlaceholderText(location.pathname);
    const isSearchingMovies = location.pathname.includes("/movies");

    useEffect(() => {
        setSearchResultsText(query ? `Search results for "${query}"` : "");
    }, [query]);

    useEffect(() => {
        dispatch(setSearchResultsText(query ? `Search results for "${query}"` : ""));
    }, [query, dispatch]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            if (isSearchingMovies) {
                dispatch(searchMovies(debouncedQuery));
                navigate(`${toMoviesList()}?search=${debouncedQuery}`);
            } else {
                dispatch(searchPeople(debouncedQuery));
                navigate(`${toActorsList()}?search=${debouncedQuery}`);
            }

            const clearInputTimer = setTimeout(() => {
                setQuery('');
            }, 3000);

            return () => clearTimeout(clearInputTimer);
        }
    }, [debouncedQuery, dispatch, isSearchingMovies, navigate]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setQuery(searchQuery);
        }
    }, [location.search]);

    return (
        <>
            <Search>
                <StyledSearchIcon />
                <Input
                    placeholder={placeholderText}
                    value={query}
                    onChange={handleInputChange}
                />
            </Search>
        </>
    );
};

export default MovieSearch;