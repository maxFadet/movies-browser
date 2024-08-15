import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import { Tile, Name, Title, Photo, Section } from '../../ActorList/styled';

import { Pagination } from "../../../common/Pagination";
import axios from "axios";

function SearchPeopleResults() {
    const location = useLocation();
    const [people, setPeople] = useState([]);
    const query = new URLSearchParams(location.search).get('search') || '';

    useEffect(() => {
        if (query) {
            const fetchPeople = async () => {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/search/person',
                    params: { query, include_adult: 'false', language: 'en-US', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDQ2MTI2MDcwMmJkZGJiOTg4MmUyZTRhMDJlZDA0ZSIsIm5iZiI6MTcyMzY2MTY0My45NDk0MjksInN1YiI6IjY2YWI4MjEwNGZlNDIxMzEwY2QyY2FlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nMPyeWUKdhaUTVPfltvi473upjSJlz1iKauLIeuXpQ'
                    }
                };

                try {
                    const response = await axios.request(options);
                    setPeople(response.data.results);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchPeople();
        }
    }, [query]);

    return (
        <Container>
            {/* <Header title={`Search result for "${query}"`} /> */}
            <Section>
                <Title>Search result for "{query}"</Title>
                {people.map((person) => (
                    <Tile key={person.id}>
                        <Photo src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
                        <Name>{person.name}</Name>
                    </Tile>
                ))}
            </Section>
            <Pagination />
        </Container>
    );
}

export default SearchPeopleResults;
