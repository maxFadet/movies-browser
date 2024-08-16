import { useSelector } from "react-redux";
import { selectSearchPeople } from "../../searchActorSlice";
import { actors } from './actorsData';
import { Tile, Name, Title, Photo, Section } from './styled';
import { toPerson } from "../../routes";
import { Pagination } from "../../common/Pagination";
import { Container } from "../../common/Container";
import { useLocation, useNavigate } from "react-router-dom";

const ActorsList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('search');
    const searchResults = useSelector(selectSearchPeople);
    const isSearching = Boolean(query);

    const actorsToDisplay = isSearching ? searchResults : actors;

    const handleActorClick = (id) => {
        navigate(toPerson({ id }));
    };

    return (
        <Container>
            <Section>
                <Title>{isSearching ? "Search results" : "Popular people"}</Title>
                {actorsToDisplay.map((actor, index) => (
                    <Tile key={index} onClick={() => handleActorClick(actor.id)}>
                        <Photo src={actor.photo} alt={actor.name} />
                        <Name>{actor.name}</Name>
                    </Tile>
                ))}
            </Section>
            <Pagination />
        </Container>
    );
};

export default ActorsList;





// import { useNavigate } from "react-router-dom";
// import { actors } from './actorsData';
// import { Tile, Name, Title, Photo, Section } from './styled';
// import { toPerson } from "../../routes";
// import { Pagination } from "../../common/Pagination";
// import { Container } from "../../common/Container";

// const ActorsList = () => {
//     const navigate = useNavigate();

//     const handleActorClick = (id) => {
//         navigate(toPerson({ id }));
//     };

//     return (
//         <Container>
//             <Section>
//                 <Title>Popular people</Title>
//                 {actors.map((actor, index) => (
//                     <Tile key={index} onClick={() => handleActorClick(actor.id)}>
//                         <Photo src={actor.photo} alt={actor.name} />
//                         <Name>{actor.name}</Name>
//                     </Tile>
//                 ))}
//             </Section>
//             <Pagination />
//         </Container>


//     );
// };

// export default ActorsList;
