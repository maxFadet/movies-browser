import { Container, Image, Legend, Wrapper } from "./styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Loader = ({ showText = true }) => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("search");
        if (query && query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [location, searchQuery]);

    return (
        <Container>
            {showText && (
                <Legend>
                    {searchQuery ? `Search results for “${searchQuery}”` : "Search results for ..."}
                </Legend>
            )}
            <Wrapper>
                <Image />
            </Wrapper>
        </Container>
    );
};