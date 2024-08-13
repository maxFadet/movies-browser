import { Search, StyledSearchIcon, Input } from "./styled";
import { useLocation } from "react-router-dom";
import { toMoviesList, toActorsList } from "../../../routes";



const getPlaceholderText = (pathname) =>
    pathname === toMoviesList()
        ? 'Search for movies...'
        : 'Search for people...'
    ;

export default () => {
    const location = useLocation();
    const placeholderText = getPlaceholderText(location.pathname);

    return (
        <Search>
            <StyledSearchIcon />
            <Input
                placeholder={placeholderText}
            />
        </Search>
    );
};