import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { Section } from "./styled";
import { useSelector } from "react-redux";
import { selectMovieCast } from "../../slices/movieCreditsSlice";
import Header from "../../../../common/Header";

export const Cast = () => {
    const movieCast = useSelector(selectMovieCast);

    return (
        <Section>
            <Header title="Cast" />
            {movieCast.map(({ character, name, profile_path, id }) => (
                <PeopleTilesList
                    key={id}
                    photo={profile_path}
                    name={name}
                    subName={character}
                />
            ))}
        </Section>
    );
};
