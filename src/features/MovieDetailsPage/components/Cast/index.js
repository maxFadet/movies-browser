import { PeopleTilesList } from "../../../../common/PeopleTilesList";
import { Section } from "./styled";
import { useSelector } from "react-redux";
import { selectMovieCast } from "../../slices/movieCreditsSlice";
import { HeaderWithMargin } from "../../../../common/Header";

export const Cast = () => {
    const movieCast = useSelector(selectMovieCast);

    return (
        <Section>
            <HeaderWithMargin title="Cast" />
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
