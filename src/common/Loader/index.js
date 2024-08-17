import { Container, Image, Legend, Wrapper } from "./styled";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Loader = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(location.search).get("search");
        if (query) {
            setSearchQuery(query);
        }
    }, [location]);

    return (
        <Container>
            <Legend>
                {searchQuery ? `Search results for “${searchQuery}”` : "Search results for ..."}
            </Legend>
            <Wrapper>
                <Image />
            </Wrapper>
        </Container>
    );
};
