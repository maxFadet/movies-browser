import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../../../common/Container";
import { Tile, Name, Title, Photo, Section } from '../../ActorList/styled';
import { Pagination } from "../../../common/Pagination";
import { fetchPeople } from "./api";

function SearchPeopleResults() {
  const location = useLocation();
  const [people, setPeople] = useState([]);
  const query = new URLSearchParams(location.search).get('search') || '';

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          const peopleResults = await fetchPeople(query);
          setPeople(peopleResults);
        } catch (error) {
          console.error("Error fetching people:", error);
        }
      };

      fetchData();
    }
  }, [query]);

  return (
    <Container>
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
