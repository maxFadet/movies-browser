import { Search, StyledSearchIcon, Input } from "./styled";
import { useLocation } from "react-router-dom";
import { useQueryParameter, useUpdateQueryParameter } from './useQueryParameter';

const SearchField = () => {
    const query = useQueryParameter("query");
    const location = useLocation();
    const updateQueryParameter = useUpdateQueryParameter();

    const placeholder = location.pathname.startsWith("/movies")
        ? "Search for movies..."
        : "Search for people...";

    const handleInputChange = (event) => {
        const value = event.target.value.trim();
        updateQueryParameter({
            key: "query",
            value: value || undefined,
            resetPage: true
        });
    };

    return (
        <Search>
            <StyledSearchIcon />
            <Input
                placeholder={placeholder}
                value={query || ""}
                onChange={handleInputChange}
            />
        </Search>
    );
};

export default SearchField;