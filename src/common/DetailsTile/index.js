import { useSelector } from "react-redux";
import {
    StyledDetailsTile,
    ImageContainer,
    Description,
    Details,
    StyledVideoIcon,
    Header,
    Year,
    DetailInfo,
    DetailInfoItem,
    DetailInfoType,
} from "./styled";
import { selectMovieDetailsById } from
    "../../features/MovieDetailsPage/slices/moviesDetailsListSlice";
import { useURLId } from "../../useUrlId";

export const DetailsTile = ({ extraContent }) => {
    const urlId = useURLId();
    const {
        title,
        poster_path,
        overview,
        production_countries,
        release_date
    } = useSelector(state => selectMovieDetailsById(state, urlId));

    const year = new Date(release_date).getFullYear();

    return (
        <StyledDetailsTile>
            {
                poster_path ?
                    <ImageContainer $image={poster_path} /> :
                    <ImageContainer>
                        <StyledVideoIcon />
                    </ImageContainer>
            }
            <Details>
                <Header>{title}</Header>
                {
                    year && (
                        <Year>{year}</Year>
                    )
                }
                {
                    production_countries || release_date ?
                        <DetailInfo>
                            <DetailInfoItem >
                                <DetailInfoType>Production:</DetailInfoType> {
                                    window.innerWidth <= 475
                                        ? (Array.isArray(production_countries[0].iso_3166_1)
                                            ? production_countries[0].iso_3166_1.join(", ")
                                            : production_countries[0].iso_3166_1)
                                        : (Array.isArray(production_countries[0].name)
                                            ? production_countries[0].name.join(", ")
                                            : production_countries[0].name)
                                }
                            </DetailInfoItem>
                            <DetailInfoItem>
                                <DetailInfoType>Release date:</DetailInfoType> {release_date}
                            </DetailInfoItem>
                        </DetailInfo> :
                        <DetailInfo>
                            <DetailInfoItem>
                                <DetailInfoType>Birth:</DetailInfoType> China, United States of America
                            </DetailInfoItem>
                            <DetailInfoItem>
                                <DetailInfoType>Place of birth:</DetailInfoType> 24.10.2020
                            </DetailInfoItem>
                        </DetailInfo>
                }
                {extraContent}
            </Details>
            <Description>
                {overview}
            </Description>
        </StyledDetailsTile >
    );
};