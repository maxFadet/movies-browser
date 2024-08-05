import { actors } from './actorsData';
import { Tile, Name, Wrapper, Title, Photo, Section } from './styled'

const ActorsList = () => {
    return (
        <Wrapper>
            <Section>
                <Title>Popular people</Title>
                {actors.map((actor, index) => (
                    <Tile key={index}>
                        <Photo src={actor.photo} alt={actor.name} />
                        <Name>{actor.name}</Name>
                    </Tile>
                ))}
            </Section>
        </Wrapper>
    );
};

export default ActorsList;